import { Metadata } from "next";

export const metadata: Metadata= {
 title: 'JErickDev Next Pricing Page',
 description: 'SEO Title',
    keywords: ['Next.js', 'SEO', 'Pricing'],
};
export default function PricingPage() {
    return (
        <main className="flex  flex-col items-center p-24">
            <span className="text-7xl">Pricing Page</span>
        </main>
    );
}