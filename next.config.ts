import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	images: {
		domains: ['placehold.co'],
	},
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
