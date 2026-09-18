/**
 * Arrive Yoga & Wellness — Corporate Operations Hub & Web Suite
 * Railway Cloud Server (Node.js)
 * 
 * Supports both Express.js and fallback native Node.js HTTP server.
 * Binds to process.env.PORT || 3000 and 0.0.0.0 for containerized hosting.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = '0.0.0.0';
const ROOT_DIR = __dirname;

// MIME Types lookup
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.csv': 'text/csv; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

// Route shortcuts
const ROUTES = {
  '/': 'Arrive_Yoga_Executive_Dashboard.html',
  '/hub': 'Arrive_Yoga_Executive_Dashboard.html',
  '/dashboard': 'Arrive_Yoga_Executive_Dashboard.html',
  '/corporate': 'Arrive_Yoga_Executive_Dashboard.html',
  '/website': 'index.html',
  '/experience': 'index.html',
  '/sanctuary': 'index.html',
  '/manual': 'START_HERE_OFFICE_OPERATIONS_MANUAL.html',
  '/ops': 'START_HERE_OFFICE_OPERATIONS_MANUAL.html',
  '/brand': '06_BRAND, MARKETING & PR/01_Brand Identity Guidelines & Vector Assets/Brand_Style_Governance_Intake_Portal.html',
  '/branding': '06_BRAND, MARKETING & PR/01_Brand Identity Guidelines & Vector Assets/Brand_Style_Governance_Intake_Portal.html',
  '/guest-intake': '05_GUEST EXPERIENCE & CONCIERGE/Guest_Intake_Digital_Portal.html',
  '/intake': '05_GUEST EXPERIENCE & CONCIERGE/Guest_Intake_Digital_Portal.html',
  '/one-pager': '00_EXECUTIVE & GOVERNANCE/Executive_One_Pager_Printable.html',
  '/welcome-packet': '05_GUEST EXPERIENCE & CONCIERGE/03_Welcome Packets & Pre-Travel Checklists/Costa_Rica_Guest_Welcome_Packet_Printable.html',
  '/welcome': '05_GUEST EXPERIENCE & CONCIERGE/03_Welcome Packets & Pre-Travel Checklists/Costa_Rica_Guest_Welcome_Packet_Printable.html',
  '/investors': 'investors.html',
  '/review': 'review_report.html',
  '/audit': 'review_report.html',
  '/bento': 'style-app-bento-portal.html',
  '/spatial-map': 'style-app-spatial-map.html',
  '/split-studio': 'style-app-split-studio.html',
  '/cinematic-deck': 'style-app-cinematic-deck.html',
  '/style-dashboard': 'style-app-dashboard.html'
};

// Try Express first, fall back to native http
try {
  const express = require('express');
  const compression = require('compression');

  const app = express();
  app.use(compression());

  // Healthcheck endpoint for Railway
  app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'arrive-corporate-hub',
      version: '0.0.1',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  });

  // Explicit route handlers
  Object.entries(ROUTES).forEach(([route, fileRelPath]) => {
    app.get(route, (req, res) => {
      const fullPath = path.join(ROOT_DIR, fileRelPath);
      if (fs.existsSync(fullPath)) {
        res.sendFile(fullPath);
      } else {
        res.status(404).send(`File not found: ${fileRelPath}`);
      }
    });
  });

  // Serve static assets from root directory
  app.use(express.static(ROOT_DIR, {
    maxAge: '1d',
    etag: true
  }));

  // Fallback to Hub
  app.use((req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'Arrive_Yoga_Executive_Dashboard.html'));
  });

  app.listen(PORT, HOST, () => {
    console.log(`=======================================================`);
    console.log(`  ARRIVE YOGA & WELLNESS - CORPORATE HUB SERVER (EXPRESS)`);
    console.log(`  Live on http://${HOST}:${PORT}`);
    console.log(`  Ready for Railway Cloud Deployment`);
    console.log(`=======================================================`);
  });

} catch (err) {
  // Graceful Native HTTP Server Fallback (Zero dependencies needed)
  console.log('Express not loaded, starting native Node.js HTTP server...');
  
  const server = http.createServer((req, res) => {
    // Railway Healthcheck
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', service: 'arrive-corporate-hub', version: '0.0.1' }));
      return;
    }

    let pathname = decodeURI(req.url.split('?')[0]);
    let targetRelative = ROUTES[pathname] || (pathname === '/' ? 'Arrive_Yoga_Executive_Dashboard.html' : pathname.replace(/^\//, ''));
    let filePath = path.join(ROOT_DIR, targetRelative);

    // Prevent directory traversal
    if (!filePath.startsWith(ROOT_DIR)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // Fallback to Executive Dashboard
        filePath = path.join(ROOT_DIR, 'Arrive_Yoga_Executive_Dashboard.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(500);
          res.end('Server Error');
        } else {
          res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400'
          });
          res.end(content);
        }
      });
    });
  });

  server.listen(PORT, HOST, () => {
    console.log(`=======================================================`);
    console.log(`  ARRIVE YOGA & WELLNESS - CORPORATE HUB SERVER (NATIVE)`);
    console.log(`  Live on http://${HOST}:${PORT}`);
    console.log(`  Ready for Railway Cloud Deployment`);
    console.log(`=======================================================`);
  });
}
