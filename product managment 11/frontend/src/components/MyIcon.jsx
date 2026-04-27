// 1. Update the import
import { LayoutGrid } from 'lucide-react';

// 2. Use it in your component
const MyIcon = () => {
  return (
    <div className="bg-blue-600 p-2">
      <LayoutGrid className="w-5 h-5 text-white" />
    </div>
  );
};

export default MyIcon;