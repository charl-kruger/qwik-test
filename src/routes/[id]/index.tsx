import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div>
            works
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to works',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
