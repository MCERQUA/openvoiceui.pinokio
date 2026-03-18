# OpenVoiceUI — Pinokio Installer

One-click install for [OpenVoiceUI](https://github.com/MCERQUA/OpenVoiceUI) via [Pinokio](https://pinokio.computer).

## Install

1. Download [Pinokio](https://pinokio.computer)
2. Click **Discover** → paste this URL:
   ```
   https://github.com/MCERQUA/openvoiceui.pinokio.git
   ```
3. Click **Install** → enter your API keys → click **Start**

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac) or Docker Engine (Linux)
- [Groq API Key](https://console.groq.com) — free, powers TTS + fast LLM
- [Deepgram API Key](https://console.deepgram.com) — free, powers speech recognition
- At least one AI provider key (Anthropic, OpenAI, Z.AI, etc.)

## What it does

OpenVoiceUI is a voice AI assistant with:
- Real-time voice conversations with any LLM
- Animated face with lip sync
- Canvas pages for images, music, files, and more
- Multi-provider support (Claude, GPT-4o, Gemini, GLM, and 20+ others)

## How it works

This installer clones the main OpenVoiceUI repo into `src/`, collects your API keys, generates all config files, and builds the Docker images. Your keys are stored locally — nothing is sent anywhere except to the AI providers you configure.
