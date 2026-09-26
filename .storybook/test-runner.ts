import { toMatchImageSnapshot } from 'jest-image-snapshot';
import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
    setup() {
        expect.extend({ toMatchImageSnapshot });
    },

    async postVisit(page, context) {
        // Wait for fonts and images to settle.
        await page.waitForLoadState('networkidle');

        const image = await page.screenshot({ animations: 'disabled' });

        expect(image).toMatchImageSnapshot({
            customSnapshotsDir: `${__dirname}/../src/__image_snapshots__`,
            customDiffDir: `${__dirname}/../src/__image_snapshots__/__diff_output__`,
            customSnapshotIdentifier: ({ currentTestName }) =>
                currentTestName
                    .replace(/[^a-z0-9]/gi, '-')
                    .replace(/-+/g, '-')
                    .toLowerCase(),
            // Allow up to 0.2 % pixel difference to tolerate sub-pixel rendering.
            failureThreshold: 0.002,
            failureThresholdType: 'percent',
        });
    },
};

export default config;
