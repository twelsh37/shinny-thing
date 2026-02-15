import { VALUES } from "@/data/about";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ValuesSection() {
  return (
    <section className="border-t border-border px-6 py-20 md:px-12 lg:px-20">
      <p className="mb-16 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        What makes us, us
      </p>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((value) => (
          <Card
            key={value.key}
            className="transition-colors hover:border-primary/20 hover:bg-muted/30"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 pt-0 text-lg font-medium leading-snug text-foreground">
              {value.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
