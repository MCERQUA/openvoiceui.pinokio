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

    // Pull latest code — track dev branch which gets fixes first
    {
      method: "shell.run",
      params: {
        path: "src",
        message: "git fetch origin && git checkout dev && git pull origin dev",
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
