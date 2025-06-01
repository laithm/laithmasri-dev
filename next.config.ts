import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Add any other config here if needed
};

export default withMDX({
  extension: /\.mdx?$/
})(nextConfig);