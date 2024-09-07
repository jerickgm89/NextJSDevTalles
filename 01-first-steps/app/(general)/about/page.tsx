import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'JErickDev Next About Page',
 description: 'SEO Description',
 keywords: ['Next.js', 'SEO', 'About'],
};
export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    );
}