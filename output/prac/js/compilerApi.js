(function () {
  "use strict";

  const ENDPOINT_KEY = "cppPracticeLab:compilerEndpoint";

  function normalizeBaseUrl(value) {
    return String(value || "").trim().replace(/\/+$/, "");
  }

  function getEndpoint() {
    return normalizeBaseUrl(localStorage.getItem(ENDPOINT_KEY));
  }

  function setEndpoint(value) {
    const endpoint = normalizeBaseUrl(value);
    if (endpoint) {
      localStorage.setItem(ENDPOINT_KEY, endpoint);
    } else {
      localStorage.removeItem(ENDPOINT_KEY);
    }
    return endpoint;
  }

  function isConfigured() {
    return Boolean(getEndpoint());
  }

  async function request(path, payload) {
    const endpoint = getEndpoint();
    if (!endpoint) {
      const error = new Error("Connect a secure C++ execution API before running code.");
      error.code = "RUNNER_NOT_CONFIGURED";
      throw error;
    }

    let response;
    try {
      response = await fetch(endpoint + path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (cause) {
      const error = new Error("The code runner could not be reached. Check its URL and CORS settings.");
      error.code = "RUNNER_UNREACHABLE";
      error.cause = cause;
      throw error;
    }

    const contentType = response.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await response.json().catch(() => ({}))
      : { message: await response.text() };

    if (!response.ok) {
      const error = new Error(body.error || body.message || `Runner returned HTTP ${response.status}.`);
      error.code = "RUNNER_ERROR";
      error.status = response.status;
      error.details = body;
      throw error;
    }

    return body;
  }

  function normalizeExecution(result) {
    const run = result.run || result;
    const compile = result.compile || {};
    return {
      stdout: String(run.stdout ?? result.stdout ?? ""),
      stderr: String(run.stderr ?? result.stderr ?? compile.stderr ?? ""),
      compileOutput: String(compile.output ?? result.compileOutput ?? ""),
      exitCode: Number.isFinite(run.code) ? run.code : (Number.isFinite(result.exitCode) ? result.exitCode : null),
      signal: run.signal ?? result.signal ?? null,
      timedOut: Boolean(result.timedOut || run.timedOut),
      raw: result
    };
  }

  async function execute(source, stdin) {
    const result = await request("/execute", {
      language: "cpp",
      source,
      stdin: stdin || "",
      files: [{ name: "main.cpp", content: source }]
    });
    return normalizeExecution(result);
  }

  async function check(lessonId, source) {
    return request("/check", {
      language: "cpp",
      lessonId,
      source,
      files: [{ name: "main.cpp", content: source }]
    });
  }

  window.CompilerApi = {
    getEndpoint,
    setEndpoint,
    isConfigured,
    execute,
    check
  };
})();
