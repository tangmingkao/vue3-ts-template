import { useDark } from '@vueuse/core';
import { useToggle } from '@vueuse/shared';

export const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
export const toggleDark = useToggle(isDark);