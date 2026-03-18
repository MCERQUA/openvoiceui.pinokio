module.exports = {
  run: [
    // Stop running containers
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "docker compose -f docker-compose.yml -f docker-compose.pinokio.yml down",
      },
    },

    // Pull latest code and bake SHA for registry check-in
    {
      method: "shell.run",
      params: {
        path: "src",
        message: [
          "git pull",
          "git rev-parse HEAD > GIT_HASH",
        ],
      },
    },

    // Rebuild images with latest changes (GIT_HASH baked in for check-in)
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "docker compose -f docker-compose.yml -f docker-compose.pinokio.yml build",
      },
    },

    {
      method: "notify",
      params: {
        html: "OpenVoiceUI updated! Click <b>Start</b> to launch.",
      },
    },
  ],
}
