import re

with open('c:/Users/Justin/Documents/scenic stay/assets/brand/app_icons_suite.html', 'r', encoding='utf-8') as f:
    text = f.read()

def extract_app_svg(app_name):
    pattern = rf'<!--\s*\d+\.\s*{app_name}\s*-->.*?<svg[^>]*>(.*?)</svg>'
    m = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
    if m:
        inner = m.group(1)
        inner = re.sub(r'href="data:image/png;base64,[^"]+"', 'href="assets/brand/scenic-stay-redwood-icon.png"', inner)
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">{inner}</svg>'
        return svg
    return None

for app in ['HOSt', 'Beacon', 'LeadGraph', 'reSeTR']:
    svg = extract_app_svg(app)
    print(f'{app} svg length:', len(svg) if svg else 'None')
    if svg:
        filename = f'c:/Users/Justin/Documents/scenic stay/assets/brand/icon_{app.lower()}.svg'
        with open(filename, 'w', encoding='utf-8') as out:
            out.write(svg)
        print('Wrote', filename)
