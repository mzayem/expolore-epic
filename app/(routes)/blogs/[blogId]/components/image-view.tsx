import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ImageViewProps {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageView({ image, isOpen, onClose }: ImageViewProps) {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent className="w-[90vw] h-[90vh]">
          <div className="relative">
            <Image
              src={image}
              alt="image"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </DialogContent>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
