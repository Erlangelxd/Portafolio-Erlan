// @vitest-environment node
import { expect, test } from 'vitest';
import { build } from 'vite';

test('the production build emits class-based dark mode utilities', async () => {
  const result = await build({
    configFile: new URL('../vite.config.js', import.meta.url).pathname,
    logLevel: 'silent',
    build: { write: false },
  });

  const outputs = Array.isArray(result) ? result : [result];
  const css = outputs
    .flatMap((output) => output.output)
    .find((file) => file.fileName.endsWith('.css'))?.source;

  expect(css).toContain('dark\\:bg-neutral-950');
  expect(css).toContain(':where(.dark,.dark *)');
});
