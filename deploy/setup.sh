#!/bin/bash
set -e

echo "==> Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "==> Cloning repo..."
cd /var/www
sudo git clone https://github.com/nicholaspisano/inyour-garden-site.git || (cd inyour-garden-site && sudo git pull)

echo "==> Building site..."
cd /var/www/inyour-garden-site
sudo npm install
sudo npm run build

echo "==> Writing nginx config..."
sudo tee /etc/nginx/sites-available/inyour.garden > /dev/null <<'NGINX'
server {
    listen 80;
    server_name inyour.garden www.inyour.garden;

    root /var/www/inyour-garden-site/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
NGINX

echo "==> Enabling site..."
sudo ln -sf /etc/nginx/sites-available/inyour.garden /etc/nginx/sites-enabled/inyour.garden
sudo nginx -t
sudo systemctl reload nginx

echo "==> Done. Site is live on port 80."
echo "==> Once DNS is pointed at 157.230.6.81, run:"
echo "    sudo certbot --nginx -d inyour.garden -d www.inyour.garden"
