import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import avatar from 'app/avatar.jpg';
import openAI from 'public/openai-pic.png'
import tj from 'public/tj-pic.jpg';
import prime from 'public/prime-pic.jpg';
import ViewCounter from 'app/blog/view-counter';
import {
  getPrimeYouTubeSubs,
  getTjYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense>
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === '@teej_dv') {
    subscribers = await getTjYouTubeSubs();
  } else {
    subscribers = await getPrimeYouTubeSubs();
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm timbytes 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a backend developer, business owner and forever student. I currently focus on `}
    
        <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="inline-flex mr-1"
            >
              <use href="/sprite.svg#openai" />
            </svg>
            OpenAI
          </Badge>
        </span>
        {` integrations and clever products to help people be more productive. `}
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          
        </div>
        <div className="relative h-40 mb-4">
          
        </div>
        <div className="relative h-80">
          
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create educationnal content for developers, teaching them about infra, 
          backend and more. This comes in different forms: blog posts, tweets and 
          maybe some day conference talks. You can watch some of my favorite content 
          creators below.
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={prime}
          name="@ThePrimeTime"
          link="https://www.youtube.com/@ThePrimeTimeagen"
        />
        <ChannelLink
          img={tj}
          name="@teej_dv"
          link="https://www.youtube.com/@teej_dv"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Over the past 4 years, I've studied mechanical engineering, studied programming on my 
        own and graduated college while working as a developer. This combination of academic 
        and professionnal experience has given me a fair share of hot takes... but that's for later. 
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        You'll find writing about technologies I'm interested or how I'm learning and growing my skillset, sharing knowledge along the way.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm always looking for my next project, I've advised companies 
        on best development practices, DevOps, open-source and more.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/tim_bytes"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://substack.com/@timbytes"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
