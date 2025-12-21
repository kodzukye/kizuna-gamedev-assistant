# Kizuna

<div align="center">

![Kizuna Banner](https://via.placeholder.com/1200x300/180018/FAE5D8?text=Kizuna+-+AI-Powered+Game+Design+Assistant)

**Your intelligent companion for game development**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-552959.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Status](https://img.shields.io/badge/Status-In%20Development-824D69)]()
[![Version](https://img.shields.io/badge/Version-0.1.0--MVP-2A114B)]()

</div>


**Kizuna** is an intelligent web assistant designed for game development teams. It helps organize and maintain design documents, coordinate team workflows, streamline project management, and suggest gameplay mechanics based on your current project needs. Kizuna empowers creative collaboration throughout the entire game design and development process. 

### What Kizuna Does

- **AI Assistant** - Get expert game design advice and suggestions
- **Rich Editor** - Write your GDDs with a powerful, specialized editor
- **Mechanics Library** - Browse and reference 20+ curated game mechanics
- **Templates** - Start fast with pre-built document templates
- **Smart Search** - Find anything in your documents instantly

.

## Features

### Current (MVP v0.1.0)

- Authentication (Email/Password + OAuth coming soon)
- Rich text document editor with auto-save
- Project and document organization
- AI conversational assistant powered by Groq
- 5+ professional GDD templates
- Game mechanics library with examples
- Full-text search

### Coming Soon

- Real-time collaboration
- Advanced AI with RAG (semantic search)
- Project management tools
- Fine-tuned game design LLM

.

## Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS, TipTap  
**Backend:** FastAPI, PostgreSQL, Redis  
**AI:** Groq
**Infrastructure:** Docker, Nginx, Ubuntu 24.04 LTS

.

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 24+ (optional, for local development)
- Python 3.12+ (optional, for local development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kodzukye/kizuna-gamedev-assistant.git
cd kizuna-gamedev-assistant
```

2. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env files with your credentials
```

3. **Start with Docker**
```bash
docker-compose up --build
```

4. **Access the app**
- Frontend: http://localhost:5173
- API Docs: http://localhost:8000/docs

.

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

**Key points of AGPL v3.0:**
- You can use, modify, and distribute this software
- You must disclose the source code
- You must license derivative works under AGPL v3.0
- ⚠️ If you run a modified version on a server, you must make the source available to users

This ensures Kizuna remains free and open-source, even when used as a web service.

.

## Acknowledgments

Built with: Groq • Supabase • TipTap • FastAPI

---

<div align="center">

**Built with ❤️ for game developers**

Made by [Myself](https://github.com/yourusername)

</div>