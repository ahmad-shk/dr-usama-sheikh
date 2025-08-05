import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

// Root & Trigger
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

// Overlay
export const DialogOverlay = ({ className = "", ...props }) => (
  <DialogPrimitive.Overlay
    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${className}`}
    {...props}
  />
)

// Content
export const DialogContent = ({ className = "", children, ...props }) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={`fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-xl rounded-xl ${className}`}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 text-gray-500 hover:text-black">
        <X className="w-5 h-5" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
)

// Title
export const DialogTitle = ({ className = "", ...props }) => (
  <DialogPrimitive.Title
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
)

// Description
export const DialogDescription = ({ className = "", ...props }) => (
  <DialogPrimitive.Description
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
)

// Header
export const DialogHeader = ({ className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)

// Footer (Optional)
export const DialogFooter = ({ className = "", ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
)

// Close button (can use separately if needed)
export const DialogClose = DialogPrimitive.Close
