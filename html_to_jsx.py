import re
import sys

def style_to_object(style_str):
    if not style_str.strip():
        return "{}"
    styles = []
    for rule in style_str.split(';'):
        if ':' in rule:
            key, val = rule.split(':', 1)
            key = key.strip()
            val = val.strip()
            # Convert kebab-case to camelCase, but keep -- variables as is
            if key.startswith('--'):
                camel_key = key
            else:
                parts = key.split('-')
                camel_key = parts[0] + ''.join(word.capitalize() for word in parts[1:])
            # Wrap val in quotes, escaping existing quotes
            val_escaped = val.replace('"', '\\"')
            styles.append(f'"{camel_key}": "{val_escaped}"')
    return "{{" + ", ".join(styles) + "}}"

def html_to_jsx(html):
    # Class to className
    jsx = re.sub(r'\bclass=', 'className=', html)
    # for to htmlFor
    jsx = re.sub(r'\bfor=', 'htmlFor=', jsx)
    
    # Inline styles
    def replace_style(match):
        return f"style={style_to_object(match.group(1))}"
    jsx = re.sub(r'style="([^"]*)"', replace_style, jsx)
    
    # Remove HTML comments
    jsx = re.sub(r'<!--.*?-->', '', jsx, flags=re.DOTALL)
    
    # Self closing tags
    tags_to_close = ['img', 'input', 'br', 'hr', 'meta', 'link']
    for tag in tags_to_close:
        # Match <tag ... > but not <tag ... />
        jsx = re.sub(r'<(' + tag + r'\b[^>]*)(?<!/)>', r'<\1 />', jsx)
        
    # Fix SVG tags which might have namespace issues or unescaped values
    # Actually, the simplest for this project is to escape { and } outside of props if needed, but we don't have JS in HTML content.
    jsx = jsx.replace('allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"', 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"')
    
    return jsx

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python html_to_jsx.py <input.html> <output.jsx>")
        sys.exit(1)
        
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract body content (simplistic approach)
    body_match = re.search(r'<body>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html
        
    # Remove script tags
    content = re.sub(r'<script.*?>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove existing global-animated-bg (since we have Background3D now)
    content = re.sub(r'<div className="global-animated-bg">.*?</div>', '', content, flags=re.DOTALL)
    
    jsx = html_to_jsx(content)
    
    output = f"""
export default function Page() {{
  return (
    <>
      {jsx}
    </>
  );
}}
"""
    with open(sys.argv[2], 'w', encoding='utf-8') as f:
        f.write(output)
    print("Done!")
