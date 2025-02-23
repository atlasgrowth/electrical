import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = {
  residential: [
    { title: "Electrical Panel Upgrades", href: "/residential#panel-upgrades" },
    { title: "Safety Inspections", href: "/residential#safety" },
    { title: "Wiring & Rewiring", href: "/residential#wiring" }
  ],
  commercial: [
    { title: "Commercial Installation", href: "/commercial#installation" },
    { title: "Energy Management", href: "/commercial#energy" },
    { title: "Electrical Maintenance", href: "/commercial#maintenance" }
  ],
  industrial: [
    { title: "Industrial Power Systems", href: "/industrial#power-systems" },
    { title: "Equipment Installation", href: "/industrial#equipment" },
    { title: "Safety Compliance", href: "/industrial#compliance" }
  ]
};

export function Navbar() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <Button variant="link" className="font-bold text-xl text-primary p-0">
            {business?.basic_info.name || 'Loading...'}
          </Button>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group w-max">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Residential</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {services.residential.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Commercial</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {services.commercial.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industrial</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    {services.industrial.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group w-max">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button size="sm" variant="default">
            <Phone className="mr-2 h-4 w-4" />
            {business?.basic_info.phone || 'Loading...'}
          </Button>
        </div>

        <Button className="md:hidden" variant="outline" size="icon">
          <Phone className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}

function ListItem({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
