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

    // Pull latest code from the main OpenVoiceUI repo
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "git pull",
      },
    },

    // Rebuild images with latest changes
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
