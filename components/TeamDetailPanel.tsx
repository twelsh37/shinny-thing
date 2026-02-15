"use client";

import Image from "next/image";

type DetailItem = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
};

type Props = {
  member: DetailItem;
  /** Use true for logos (object-contain, padded); false for photos (object-cover). */
  imageIsLogo?: boolean;
};

export function TeamDetailPanel({ member, imageIsLogo = false }: Props) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-background p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {member.name}
      </h1>
      <p className="mt-1 text-base text-muted-foreground sm:text-lg">
        {member.role}
      </p>

      <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 md:flex-row md:gap-12 md:mt-10">
        <div className="relative shrink-0">
          <div
            className={`relative size-40 overflow-hidden rounded-sm bg-muted sm:size-48 md:size-64 ${imageIsLogo ? "p-4" : ""}`}
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name} logo`}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 256px"
                className={imageIsLogo ? "object-contain" : "object-cover"}
                unoptimized={member.image.endsWith(".svg")}
              />
            ) : (
              <div className="flex size-full items-center justify-center text-3xl font-semibold text-muted-foreground sm:text-4xl md:text-5xl">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            {!imageIsLogo && (
              <div
                className="absolute inset-0 opacity-90 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(135deg, #ec4899 0%, transparent 50%, #ec4899 100%)",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 60%, 20% 40%, 0 20%)",
                }}
                aria-hidden
              />
            )}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p className="text-[15px] leading-relaxed text-foreground sm:text-base md:text-lg">
              {member.bio}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-4">
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                Website
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                LinkedIn
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                Instagram
              </a>
            )}
            {member.email && (
              <a
                href={member.email}
                className="inline-flex min-h-[44px] items-center py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8" aria-hidden />
    </div>
  );
}
