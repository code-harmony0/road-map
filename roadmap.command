#!/bin/bash
# Double-click this file to open the roadmap.
# ES modules are blocked on file:// so it serves the folder on a local port first.

cd "$(dirname "$0")" || exit 1
PORT=8642
URL="http://localhost:$PORT/index.html"

# Offer Radar reads career-ops' real tracker instead of hand-typed numbers.
command -v node >/dev/null 2>&1 && node scripts/sync-career-ops.mjs || true

# Reuse a server that's already serving THIS app; anything else on the port is a stranger.
if ! curl -sf "$URL" 2>/dev/null | grep -q "Senior Roadmap"; then
  nohup python3 -m http.server "$PORT" >/dev/null 2>&1 &
  disown
  for _ in 1 2 3 4 5 6 7 8 9 10; do
    curl -sf "$URL" >/dev/null 2>&1 && break
    sleep 0.3
  done
fi

open "$URL"
echo "Roadmap open at $URL"
echo "Server keeps running in the background. Stop it with: pkill -f 'http.server $PORT'"
