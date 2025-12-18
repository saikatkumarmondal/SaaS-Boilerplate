'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type NewPostModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function NewPostModal({
  open,
  onClose,
}: NewPostModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Text input */}
          <div className="space-y-2">
            <Label htmlFor="post-text">Post Text</Label>
            <Textarea
              id="post-text"
              placeholder="Write your post content..."
              className="resize-none"
            />
          </div>

          {/* Image input */}
          <div className="space-y-2">
            <Label htmlFor="post-image">Image</Label>
            <Input id="post-image" type="file" accept="image/*" />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>Create Post</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
