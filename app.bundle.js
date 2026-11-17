(async () => {
  const parts = ['p0.js','p1.js','p2.js','p3.js'];
  let code = '';
  for (const p of parts) {
    const r = await fetch(p);
    code += await r.text();
  }
  const s = document.createElement('script');
  s.textContent = code;
  document.body.appendChild(s);
})();
