import { Metadata } from "next";

export const metadata: Metadata= {
 title: 'JErickDev Next Contact Page',
 description: 'JErickDev Next Contact Page',
 keywords: ['Next.js', 'SEO', 'Contact'],
};
export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Contact Page</span>
        </main>
    );
}