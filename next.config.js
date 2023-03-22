export const optimizeFonts = true;
export const swcMinify = true;
export const compiler = {
  styledComponents: true,
};
export const typescript = {
  ignoreBuildErrors: true,
};
export const eslint = {
  ignoreDuringBuilds: true,
};
export const images = {
  domains: [process.env.SERVER_HOSTNAME],
};
export const output = "standalone";
export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
}
