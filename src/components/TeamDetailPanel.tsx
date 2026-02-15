"use client";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  image?: string;
};

type Props = {
  member: TeamMember;
};

export function TeamDetailPanel({ member }: Props) {
  return (
    <div className="flex h-full flex-col overflow-auto bg-background p-8 md:p-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {member.name}
      </h1>
      <p className="mt-1 text-lg text-muted-foreground">{member.role}</p>

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="relative shrink-0">
          <div className="relative size-48 overflow-hidden rounded-sm bg-muted md:size-64">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center text-4xl font-semibold text-muted-foreground md:text-5xl">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div
              className="absolute inset-0 opacity-90 mix-blend-multiply"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, transparent 50%, #ec4899 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 60%, 20% 40%, 0 20%)",
              }}
              aria-hidden
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              {member.bio}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                LinkedIn
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
              >
                Instagram
              </a>
            )}
            {member.email && (
              <a
                href={member.email}
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground"
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
