# Storyblok + VWO Feature Management & Experimentation

![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-^4.0-646CFF?logo=vite&style=flat-square)
![Storyblok](https://img.shields.io/badge/Storyblok-CMS-0EA5E9?logo=storyblok&style=flat-square)
![VWO](https://img.shields.io/badge/VWO-FME--SDK-DD0031?logo=google-optimize&style=flat-square)

## Overview

This repository demonstrates a seamless integration between [Storyblok](http://www.storyblok.com) as a headless CMS and [VWO FME (Feature Management & Experimentation)](https://vwo.com) for A/B testing.

## Get Started

### Prerequisites
- **Storyblok Account**: [Sign up for free](https://app.storyblok.com/#/signup)
- **VWO Account**: [Start free trial](https://vwo.com/free-trial/)
- **Node.js**: Version 16 or higher

### Installation

Clone this repository & install dependencies:

```sh
git clone git@github.com:storyblok/vwo-demo.git
cd vwo-demo
yarn install
```

### Configuration

#### Environment Variables

1. Create a `.env` file in the root directory:

```sh
cp .env.example .env
```

2. Open and fill it with correct values:

```sh
STORYBLOK_DELIVERY_API_TOKEN=<REPLACE_WITH_PUBLIC_STORYBLOK_TOKEN>
VITE_VWO_ACCOUNT_ID=<REPLACE_WITH_VWO_ACCOUNT_ID>
VITE_VWO_SDK_KEY=<REPLACE_WITH_VWO_SDK_KEY>
```

> [!IMPORTANT]
> - Copy your space's **public access token** from **Settings** > **Access Tokens** in your Storyblok space
> - Get your VWO Account ID and SDK Key from **Settings** > **API Keys** in your VWO dashboard

## Story schema

To have this demo working properly, please be sure to have a story following this structure:

```js
// Story Object

{
  "story": {
    "name": "Demo",
    [...]
    "uuid": "f36c7dc5-07b3-4801-9699-11348af688b1",
    "content": {
      "_uid": "983137e6-175a-4d0a-be15-2536508fe097",
      "body": [
        {
          "_uid": "60415a25-7583-4cd1-96b1-3380f5ec15d8",
          "variants": [
            {
              "title": "Banner Variant Default",
              "component": "banner",
              "vwo_variation": { // VWO Custom Field Type
                "isForced": false,
                "isDefault": true,
                "featureKey": "banner",
                "featureName": "Banner",
                "variationKey": "default",
                "variationName": "Default"
              }
            },
            {
              "title": "Banner Variant 1",
              "component": "banner",
              "vwo_variation": { // VWO Custom Field Type
                "isForced": false,
                "isDefault": false,
                "featureKey": "banner",
                "featureName": "Banner",
                "variationKey": "variation1",
                "variationName": "Variation 1"
              }
            }
          ],
          "component": "experimentation-vwo" // Nestable component which will contain all the variations to be tested.
        }
      ],
      "component": "page"
    },
    "slug": "demo",
    "full_slug": "demo"
  }
}
```

## Resources

### Documentation
- [VWO FME Node.js SDK](https://developers.vwo.com/docs/server-side-sdks/nodejs)
- [Storyblok Vue Guide](https://storyblok.com/docs/guides/vue)
- [Feature Flags](https://help.vwo.com/hc/en-us/sections/4405228806169-Feature-Flags)

*Built with ❤️ using Vue.js, Storyblok, and VWO FME SDK*
