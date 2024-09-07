import Link from "next/link";

export const metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>Hola mundo</span>

      <Link href="/about" className="bg-blue-400 p-2 rounded-lg hover:bg-blue-800">About Page</Link>
    </main>
    
  );
}
