module.exports = {
  daemon: true,
  run: [
    // Start containers in foreground (Pinokio daemon mode manages lifecycle)
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "docker compose -f docker-compose.yml -f docker-compose.pinokio.yml up",
        on: [{
          event: "/OpenVoiceUI starting on port/i",
          done: true,
        }],
      },
    },

    // Inject the pre-paired device identity into the OpenVoiceUI container.
    // Generated during install (setup-config.js) and pre-registered in
    // src/openclaw-data/devices/paired.json.
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "node inject-device-identity.js",
      },
    },

    // Set URL so Pinokio shows "Open" button
    {
      method: "local.set",
      params: {
        url: "http://localhost:{{local.PORT||5001}}",
      },
    },

    // Safety fallback: auto-approve any pending devices if inject failed
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "node auto-approve-devices.js",
      },
    },
  ],
}
