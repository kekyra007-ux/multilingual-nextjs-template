// utils/i18nSafe.js
export const tArray = (t, key, ns = "common") => {
  const result = t(key, { ns, returnObjects: true });
  return Array.isArray(result) ? result : [];
};
