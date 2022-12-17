import Link from "next/link"
import Image from "next/image"

import hero from "../../public/images/hero.png"
import { siteConfig } from "@/config/site"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/manifoldfinance/v2website",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <Image src={hero} width={680} alt="Hero image" priority />
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Maximal Emancipated Value
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            Connecting capital to opportunities
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="relative inline-flex h-11 items-center rounded-md border border-transparent bg-brand-500 px-8 py-2 font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Get Started
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex h-11 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            GitHub
          </Link>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Subsystems
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7"></p>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                width="56"
                height="80"
                viewBox="0 0 56 80"
                fill="none"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.0263 0L47.825 30.9909L28.0253 42.5295L8.22821 30.9905L28.0263 0ZM14.2889 29.525L28.0263 8.0214L41.7639 29.5251L28.0254 37.5316L14.2889 29.525Z"
                  fill="white"
                />
                <path
                  d="M27.997 49.341L5.0304 35.9549L4.4032 36.9366C-2.6704 48.009 -1.0907 62.51 8.2014 71.801C19.1359 82.733 36.8641 82.733 47.799 71.801C57.091 62.51 58.67 48.009 51.597 36.9366L50.969 35.9546L27.998 49.342L27.997 49.341Z"
                  fill="white"
                />
              </svg>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Liquid Staking</h3>
                <p className="text-sm text-slate-100">
                  Support for Lido, Rocketpool and more
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                width="17"
                height="28"
                viewBox="0 0 17 28"
                fill="none"
                className="h-12 w-12 fill-current"
              >
                <g opacity="0.9">
                  <path
                    d="M8.49825 0V10.0523L16.9945 13.8488L8.49825 0Z"
                    fill="white"
                  />
                  <path
                    d="M8.4974 0L0 13.8488L8.4974 10.0523V0Z"
                    fill="white"
                  />
                  <path
                    d="M8.49825 20.363V27.1933L17.0002 15.4309L8.49825 20.363Z"
                    fill="white"
                  />
                  <path
                    d="M8.4974 27.1933V20.3618L0 15.4309L8.4974 27.1933Z"
                    fill="white"
                  />
                  <path
                    d="M8.49825 18.782L16.9945 13.8488L8.49825 10.0545V18.782Z"
                    fill="white"
                  />
                  <path
                    d="M0 13.8488L8.4974 18.782V10.0545L0 13.8488Z"
                    fill="white"
                  />
                </g>
              </svg>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">4337</h3>
                <p className="text-sm text-slate-100">
                  EIP 4337 Account Abstraction support
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="black"
                  fill-opacity="0.1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="url(#paint0_linear_18_3)"
                  fill-opacity="0.9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="black"
                  fill-opacity="0.1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="url(#paint1_linear_18_3)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="black"
                  fill-opacity="0.1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="url(#paint2_linear_18_3)"
                  fill-opacity="0.9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="black"
                  fill-opacity="0.1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.32306 0.321938C1.49676 0.0787521 1.83258 -0.0283485 2.26684 0.00639234C2.86612 0.0556085 3.65937 0.37695 4.42367 0.921223C5.18507 1.46839 5.74384 2.11979 5.98124 2.66986C6.15494 3.06937 6.16071 3.42256 5.98701 3.66574L4.79426 5.33332C4.62056 5.5765 4.28184 5.6836 3.85048 5.64886C3.2512 5.59675 2.45505 5.27832 1.69365 4.73115C0.929353 4.18688 0.373489 3.53546 0.133198 2.9854C-0.0405064 2.58588 -0.0462739 2.2327 0.12743 1.98951L1.32306 0.321938ZM5.82201 3.54706C5.96097 3.35598 5.93201 3.06937 5.79594 2.75091C5.56723 2.2269 5.03166 1.61024 4.3021 1.08913C3.57544 0.568019 2.81981 0.258252 2.24948 0.211931C1.90207 0.18298 1.62708 0.246683 1.48811 0.440653L1.48229 0.452216C1.35201 0.646186 1.381 0.921217 1.51706 1.23388C1.74577 1.76079 2.28136 2.37744 3.00802 2.89855C3.73469 3.41966 4.49025 3.72946 5.06058 3.77578C5.4022 3.80183 5.67144 3.74104 5.8133 3.55865L5.82201 3.54706ZM3.9634 1.56105C4.32818 1.82161 4.59738 2.13137 4.71029 2.39482C4.77688 2.54247 4.79424 2.67276 4.72765 2.7625C4.66396 2.85225 4.5337 2.87831 4.37447 2.86383C4.08786 2.84067 3.7115 2.68433 3.34672 2.42377C2.98195 2.16322 2.71268 1.85634 2.59977 1.59288C2.53608 1.44524 2.51872 1.31495 2.58242 1.2252C2.64611 1.13546 2.77641 1.10941 2.93853 1.12099C3.22225 1.14705 3.60151 1.30049 3.9634 1.56105Z"
                  fill="url(#paint3_linear_18_3)"
                  fill-opacity="0.9"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_18_3"
                    x1="3.05722"
                    y1="0"
                    x2="3.05722"
                    y2="5.65526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F07AB2" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_18_3"
                    x1="3.05722"
                    y1="0"
                    x2="3.05722"
                    y2="5.65526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F07AB2" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_18_3"
                    x1="3.05722"
                    y1="0"
                    x2="3.05722"
                    y2="5.65526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F07AB2" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_18_3"
                    x1="3.05722"
                    y1="0"
                    x2="3.05722"
                    y2="5.65526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E5E5E5" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Sushi Guard</h3>
                <p className="text-sm text-slate-100">
                  Protecting Sushiswap users from MEV
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Disco3</h3>
                <p className="text-sm text-slate-100">
                  UI components built using Radix UI and styled with Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">OpenMev</h3>
                <p className="text-sm text-slate-100">
                  Next generation MEV solutions
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.25 6.25V1.25H6.25V6.25H1.25ZM5 2.5V5H2.5V2.5H5ZM15 7.5V11.25H11.25V15H7.5V20H20V7.5H15ZM12.5 12.5H15V15H12.5V12.5ZM8.75 18.75H11.25V16.25H8.75V18.75ZM15 18.75H12.5V16.25H15V18.75ZM16.25 18.75H18.75V16.25H16.25V18.75ZM18.75 15H16.25V12.5H18.75V15ZM16.25 8.75V11.25H18.75V8.75H16.25ZM11.25 4.375V6.875H8.75V4.375H11.25ZM7.5 8.125V3.125H12.5V8.125H7.5ZM5 10V12.5H2.5V10H5ZM1.25 13.75V8.75H6.25V13.75H1.25Z"
                  fill="white"
                />
              </svg>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">SecureRpc</h3>
                <p className="text-sm text-slate-100">
                  Uncensored access to Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Subsystems combine to make up manifold
          </p>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Supporting <br />
            Fundamental Innovation
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Manifold is open source and powered by open source software.
            <br />
            Join the discussion on our{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Community Forums
            </Link>
            .{" "}
            <Link href="/docs" className="underline underline-offset-4">
              Read more about the community
            </Link>
            .
          </p>
        </div>
        {stars && (
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-slate-600 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-r-8 border-l-0 border-solid border-y-transparent border-r-slate-800"></div>
              <div className="flex h-10 items-center rounded-md border border-slate-800 bg-slate-800 px-4  font-medium text-slate-200">
                {stars} stars on GitHub
              </div>
            </div>
          </Link>
        )}
      </section>
    </>
  )
}
