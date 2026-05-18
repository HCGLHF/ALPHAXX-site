const INDEXNOW_KEY = "3de4733459264958879b09e7abc14da1";
const DEFAULT_SITE_ORIGIN = "https://alphaxxxx.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const siteOrigin = (process.env.SITE_ORIGIN || DEFAULT_SITE_ORIGIN).replace(/\/$/, "");
const host = new URL(siteOrigin).host;
const keyLocation = `${siteOrigin}/${INDEXNOW_KEY}.txt`;
const sitemapUrl = `${siteOrigin}/sitemap.xml`;

function extractSitemapUrls(sitemapXml) {
  const locMatches = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/gu)];
  return locMatches.map((match) => match[1].trim()).filter(Boolean);
}

async function main() {
  const sitemapResponse = await fetch(sitemapUrl);

  if (!sitemapResponse.ok) {
    throw new Error(`Could not fetch sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`);
  }

  const sitemapXml = await sitemapResponse.text();
  const urlList = extractSitemapUrls(sitemapXml);

  if (urlList.length === 0) {
    throw new Error(`No URLs found in ${sitemapUrl}`);
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation,
      urlList,
    }),
  });

  const body = await response.text();

  console.log(`Submitted ${urlList.length} URLs from ${sitemapUrl}`);
  console.log(`IndexNow response: ${response.status} ${response.statusText}`);

  if (body) {
    console.log(body);
  }

  if (!response.ok && response.status !== 202) {
    throw new Error("IndexNow submission failed");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
