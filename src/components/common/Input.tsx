export function Input({
  className = '',
  ...props
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md bg-foreground text-background ${className}`}
      {...props}
    />
  )
}

export function TextArea({
  className = '',
  ...props
}: { className?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full px-3 py-2 rounded-md bg-foreground text-background ${className}`}
      {...props}
    />
  )
}
