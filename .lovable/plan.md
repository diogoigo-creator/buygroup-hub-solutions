We will update the office address throughout the application to the official Belo Horizonte location provided: **R. Rio Grande do Norte, 1436 - Sala 813 - Savassi, Belo Horizonte - MG, 30130-138**.

This replaces previous placeholder/Santos references to ensure high-fidelity institutional information.

### 1. Update Contact Page (`src/routes/contato.tsx`)
- Display the complete structured address in the sidebar box (Street, Room, Neighborhood, City, State, ZIP) next to the MapPin icon.

### 2. Update About Page (`src/routes/sobre.tsx`)
- Change the "Sede" card in the statistics section to **Belo Horizonte · MG**.

### 3. Update Footer (`src/components/site/Footer.tsx`)
- Update the footer location to **Belo Horizonte · MG · Brasil**.

### 4. Update Organization SEO Schema (`src/routes/__root.tsx`)
- Enrich the JSON-LD `@type: Organization` structured data with the full official address (streetAddress, addressLocality, addressRegion, postalCode).
