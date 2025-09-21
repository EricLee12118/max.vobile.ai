import { Header } from "@/components/header";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AssetPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-grid-animated opacity-30" />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800 hover:bg-gray-800/50">
                    <TableHead className="text-gray-300 font-semibold w-[100px]">Asset ID</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[200px]">Asset Name</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[80px]">Link</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[120px]">Impact</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[100px]">Heat</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[140px]">Profitability</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[120px]">Portfolio</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[130px]">Listing Date</TableHead>
                    <TableHead className="text-gray-300 font-semibold w-[100px]">Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={9} className="h-40 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-400 text-sm">No data</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}