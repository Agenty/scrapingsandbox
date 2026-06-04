import { FileText, ScrollText, ShieldAlert, Table2 } from "lucide-react";

export const pages = [
    {
        to: '/infinite-scroll',
        label: 'Infinite Scroll',
        icon: ScrollText,
        desc: 'Lazy load on scroll',
    },
    {
        to: '/data-table',
        label: 'Data Table',
        icon: Table2,
        desc: 'Sortable table view',
    },
    {
        to: '/rate-limit',
        label: 'Rate Limit',
        icon: ShieldAlert,
        desc: 'HTTP 429 simulation',
    },
    {
        to: '/form-submit',
        label: 'Form Submit',
        icon: FileText,
        desc: 'Form validation demo',
    },
];