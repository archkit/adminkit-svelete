export interface ToastItem {
  id: number;
  title: string;
  message?: string;
  variant: 'note' | 'success' | 'warning' | 'danger';
  duration: number | false;
  action?: { label: string; onClick: () => void };
}

let toasts = $state<ToastItem[]>([]);
let nextId = 0;

const DEFAULT_DURATIONS: Record<string, number | false> = {
  note: 5000,
  success: 5000,
  warning: 8000,
  danger: false,
};

export function getToasts() {
  return toasts;
}

export function show(opts: {
  title: string;
  message?: string;
  variant?: ToastItem['variant'];
  duration?: number | false;
  action?: { label: string; onClick: () => void };
}) {
  const variant = opts.variant ?? 'note';
  const id = nextId++;
  const duration = opts.duration ?? DEFAULT_DURATIONS[variant];
  const item: ToastItem = { id, title: opts.title, message: opts.message, variant, duration, action: opts.action };
  toasts.push(item);
  if (toasts.length > 5) toasts.shift();
  if (duration !== false) {
    setTimeout(() => dismiss(id), duration);
  }
  return { dismiss: () => dismiss(id) };
}

export function clear() {
  toasts = [];
}

export function dismiss(id: number) {
  toasts = toasts.filter(t => t.id !== id);
}
