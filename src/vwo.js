export function initVWO(accountId) {
  if (window._vwo_code) return;

  const version = 2.1;
  const settings_tolerance = 2000;
  const hide_element = 'body';
  const hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;';
  let f = false;
  const w = window;
  const d = document;
  const cK = `_vwo_${accountId}_settings`;
  let cc = {};

  try {
    const c = JSON.parse(localStorage.getItem(`_vwo_${accountId}_config`));
    cc = c && typeof c === 'object' ? c : {};
  } catch (e) {}

  const stT = cc.stT === 'session' ? w.sessionStorage : w.localStorage;

  const code = {
    settings_tolerance: () => cc.sT || settings_tolerance,
    hide_element_style: () => `{${cc.hES || hide_element_style}}`,
    hide_element: () => {
      if (performance.getEntriesByName('first-contentful-paint')[0]) return '';
      return typeof cc.hE === 'string' ? cc.hE : hide_element;
    },
    finish: (e) => {
      if (!f) {
        f = true;
        const t = d.getElementById('_vis_opt_path_hides');
        if (t) t.parentNode.removeChild(t);
        if (e) new Image().src = `https://dev.visualwebsiteoptimizer.com/ee.gif?a=${accountId}${e}`;
      }
    },
    addScript: ({ src, text }) => {
      const script = d.createElement('script');
      script.type = 'text/javascript';
      if (src) script.src = src;
      else script.text = text;
      d.head.appendChild(script);
    },
    load: (url, opts = {}) => {
      const cached = code.getSettings();
      if (cached) {
        const inline = d.createElement('script');
        inline.textContent = cached;
        d.head.appendChild(inline);
        if (!w.VWO || VWO.caE) {
          stT.removeItem(cK);
          code.load(url);
        }
      } else {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.withCredentials = !opts.dSC;
        xhr.responseType = opts.responseType || 'text';
        xhr.onload = () => {
          if (opts.onloadCb) return opts.onloadCb(xhr, url);
          if (xhr.status === 200 || xhr.status === 304) {
            code.addScript({ text: xhr.responseText });
          } else {
            code.finish(`&e=loading_failure:${url}`);
          }
        };
        xhr.onerror = () => {
          if (opts.onerrorCb) return opts.onerrorCb(url);
          code.finish(`&e=loading_failure:${url}`);
        };
        xhr.send();
      }
    },
    getSettings: () => {
      try {
        const e = stT.getItem(cK);
        if (!e) return;
        const parsed = JSON.parse(e);
        if (Date.now() > parsed.e) {
          stT.removeItem(cK);
          return;
        }
        return parsed.s;
      } catch {
        return;
      }
    },
    init: () => {
      if (d.URL.includes('__vwo_disable__')) return;

      w._vwo_settings_timer = setTimeout(() => {
        code.finish();
        stT.removeItem(cK);
      }, code.settings_tolerance());

      if (code.hide_element() !== 'body') {
        const style = d.createElement('style');
        style.id = '_vis_opt_path_hides';
        style.type = 'text/css';
        style.appendChild(d.createTextNode(code.hide_element() + code.hide_element_style()));
        d.head.appendChild(style);
      } else {
        const overlay = d.createElement('div');
        overlay.id = '_vis_opt_path_hides';
        overlay.classList.add('_vis_hide_layer');
        overlay.style.cssText = 'z-index:2147483647!important;position:fixed!important;left:0;top:0;width:100%;height:100%;background:white;display:block;';
        d.body.appendChild(overlay);
      }

      const url = `https://dev.visualwebsiteoptimizer.com/j.php?a=${accountId}&u=${encodeURIComponent(d.URL)}&vn=${version}`;
      if (w.location.search.includes('_vwo_xhr')) {
        code.addScript({ src: url });
      } else {
        code.load(url + '&x=true');
      }
    }
  };

  w._vwo_code = code;
  code.init();
}