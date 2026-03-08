(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navigation = [
    {
        section: "Overview",
        items: [
            {
                label: "Dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                href: "/"
            },
            {
                label: "Notifikasi",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                href: "/notifications",
                badge: "3"
            }
        ]
    },
    {
        section: "Data Layer",
        items: [
            {
                label: "Village Data Hub",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                children: [
                    {
                        label: "Master Desa",
                        href: "/data/master-desa"
                    },
                    {
                        label: "Master Penduduk",
                        href: "/data/master-penduduk"
                    },
                    {
                        label: "Master Komoditas",
                        href: "/data/master-komoditas"
                    },
                    {
                        label: "Data Sensor IoT",
                        href: "/data/sensor-iot"
                    },
                    {
                        label: "Data Geospasial",
                        href: "/data/geospasial"
                    }
                ]
            },
            {
                label: "Integrasi Sumber",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                href: "/data/integrasi"
            }
        ]
    },
    {
        section: "Analytics Layer",
        items: [
            {
                label: "DNA Desa Engine",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
                href: "/analytics/dna-desa"
            },
            {
                label: "Diagnostic Engine",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                href: "/analytics/diagnostic"
            },
            {
                label: "Planning Engine",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                href: "/analytics/planning"
            },
            {
                label: "Recommendation Engine",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
                href: "/analytics/recommendation"
            },
            {
                label: "Monitoring Engine",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                href: "/analytics/monitoring"
            }
        ]
    },
    {
        section: "Strategic Layer",
        items: [
            {
                label: "Peta DNA Desa",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
                href: "/strategic/peta-dna"
            },
            {
                label: "Laporan & Insight",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                href: "/strategic/laporan"
            }
        ]
    }
];
const bottomNav = [
    {
        label: "Pengaturan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        href: "/settings"
    },
    {
        label: "Bantuan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
        href: "/help"
    }
];
function Sidebar() {
    _s();
    const [expandedItems, setExpandedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Village Data Hub"
    ]);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const toggleExpand = (label)=>{
        setExpandedItems((prev)=>prev.includes(label) ? prev.filter((item)=>item !== label) : [
                ...prev,
                label
            ]);
    };
    const isActive = (href)=>{
        if (!href) return false;
        return pathname === href;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 items-center gap-3 border-b border-border px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                            className: "h-5 w-5 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold text-sidebar-foreground",
                                children: "AI Desa"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Framework v1.0"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 overflow-y-auto px-3 py-4",
                children: navigation.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                children: group.section
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleExpand(item.label),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors", "text-sidebar-foreground hover:bg-sidebar-accent"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 27
                                                                }, this),
                                                                item.label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 text-muted-foreground transition-transform", expandedItems.includes(item.label) && "rotate-180")
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this),
                                                expandedItems.includes(item.label) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "ml-6 mt-1 space-y-1 border-l border-border pl-3",
                                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: child.href,
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block w-full rounded-lg px-3 py-1.5 text-left text-sm transition-colors", isActive(child.href) ? "bg-sidebar-accent text-sidebar-primary" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"),
                                                                children: child.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, child.label, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href || "#",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors", isActive(item.href) ? "bg-sidebar-accent text-sidebar-primary" : "text-sidebar-foreground hover:bg-sidebar-accent"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isActive(item.href) ? "text-sidebar-primary" : "text-muted-foreground")
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 23
                                                }, this),
                                                item.label,
                                                item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground",
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                            lineNumber: 160,
                                            columnNumber: 21
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, group.section, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border px-3 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: bottomNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href || "#",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors", "text-sidebar-foreground hover:bg-sidebar-accent"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    item.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this)
                        }, item.label, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "AlMuX7VNs126SKTW8pAZpSycSxA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const currentDate = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            type: "search",
                            placeholder: "Cari desa, komoditas, atau data...",
                            className: "h-9 w-80 bg-secondary pl-9 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-2 text-sm text-muted-foreground md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentDate
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-5 w-5 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-80 max-h-96 overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-foreground",
                                        children: "Notifikasi"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/notifications",
                                            className: "flex flex-col items-start gap-1 py-3 cursor-pointer hover:bg-secondary focus:bg-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: "Alert: Risiko Gagal Panen"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Desa Sukamaju memiliki indikasi kekurangan air untuk tanaman padi"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/notifications",
                                            className: "flex flex-col items-start gap-1 py-3 cursor-pointer hover:bg-secondary focus:bg-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: "Update Data Sensor"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "12 sensor IoT baru terdeteksi di Kabupaten Bandung"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/notifications",
                                            className: "flex flex-col items-start gap-1 py-3 cursor-pointer hover:bg-secondary focus:bg-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: "Rekomendasi Baru"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "5 desa potensial untuk program hortikultura"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/notifications",
                                            className: "flex items-center justify-center py-2 text-sm font-medium text-primary hover:bg-secondary",
                                            children: "Lihat Semua Notifikasi"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-4 w-4 text-primary-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden text-left md:block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-foreground",
                                                    children: "Admin Desa"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Kementerian Desa"
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        children: "Akun Saya"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: "Profil"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: "Pengaturan"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: "Keluar"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/header.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/header.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function DashboardLayout({ children, title, description, breadcrumb }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-64 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-6",
                        children: [
                            breadcrumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mb-4 flex items-center gap-2 text-sm text-muted-foreground",
                                children: breadcrumb.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this),
                                            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.href,
                                                className: "hover:text-foreground",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                                lineNumber: 32,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-muted-foreground",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "border-t border-border px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "2024 AI Desa Framework - Kementerian Desa, PDT, dan Transmigrasi"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Versi 1.0.0"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Data terakhir diperbarui: 7 Maret 2026"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DataTable({ data, columns, searchPlaceholder = "Cari...", onView, onEdit, onDelete }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const filteredData = data.filter((item)=>columns.some((col)=>{
            const value = item[col.key];
            return String(value).toLowerCase().includes(searchQuery.toLowerCase());
        }));
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: searchPlaceholder,
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "pl-9 bg-secondary border-border"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    "Filter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                className: "border-border hover:bg-transparent",
                                children: [
                                    columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-muted-foreground font-medium",
                                            children: col.label
                                        }, String(col.key), false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)),
                                    (onView || onEdit || onDelete) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-12"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: paginatedData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "border-border",
                                    children: [
                                        columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-card-foreground",
                                                children: col.render ? col.render(item) : String(item[col.key] ?? "-")
                                            }, String(col.key), false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)),
                                        (onView || onEdit || onDelete) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            className: "h-8 w-8 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        className: "bg-card border-border",
                                                        children: [
                                                            onView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onView(item),
                                                                className: "gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Lihat Detail"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, this),
                                                            onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onEdit(item),
                                                                className: "gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 27
                                                            }, this),
                                                            onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>onDelete(item),
                                                                className: "gap-2 text-destructive",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                        lineNumber: 151,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Hapus"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Menampilkan ",
                            (currentPage - 1) * itemsPerPage + 1,
                            " -",
                            " ",
                            Math.min(currentPage * itemsPerPage, filteredData.length),
                            " dari",
                            " ",
                            filteredData.length,
                            " data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: Array.from({
                                    length: Math.min(5, totalPages)
                                }, (_, i)=>{
                                    const page = i + 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: currentPage === page ? "default" : "ghost",
                                        size: "sm",
                                        onClick: ()=>setCurrentPage(page),
                                        className: "w-8",
                                        children: page
                                    }, page, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(DataTable, "txtXLi45gap+jsOdqRzNDGQD7TY=");
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCard",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
;
;
function StatsCard({ title, value, change, changeLabel, icon, className }) {
    const getTrendIcon = ()=>{
        if (!change) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
            lineNumber: 15,
            columnNumber: 25
        }, this);
        return change > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
            lineNumber: 16,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
            lineNumber: 16,
            columnNumber: 62
        }, this);
    };
    const getTrendColor = ()=>{
        if (!change) return "text-muted-foreground";
        return change > 0 ? "text-success" : "text-destructive";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-border bg-card p-6", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-muted-foreground",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-3xl font-bold text-card-foreground",
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        (change !== undefined || changeLabel) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 flex items-center gap-1 text-xs", getTrendColor()),
                            children: [
                                getTrendIcon(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        change !== undefined && `${change > 0 ? "+" : ""}${change}%`,
                                        changeLabel && ` ${changeLabel}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg bg-secondary p-3",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = StatsCard;
var _c;
__turbopack_context__.k.register(_c, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/lib/mock-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock Data for DNA DESA AI Presisi
// Comprehensive dataset for villages, sensors, production, demographics, and analytics
__turbopack_context__.s([
    "diagnosticIssues",
    ()=>diagnosticIssues,
    "getPriorityVillages",
    ()=>getPriorityVillages,
    "getTopVillages",
    ()=>getTopVillages,
    "getVillageById",
    ()=>getVillageById,
    "getVillageStats",
    ()=>getVillageStats,
    "getVillagesByProvince",
    ()=>getVillagesByProvince,
    "getVillagesByType",
    ()=>getVillagesByType,
    "productionData",
    ()=>productionData,
    "recommendations",
    ()=>recommendations,
    "sensorData",
    ()=>sensorData,
    "villages",
    ()=>villages
]);
const villages = [
    // Jawa Barat - Pertanian
    {
        id: "V001",
        name: "Sukamaju",
        code: "3201012001",
        province: "Jawa Barat",
        kabupaten: "Garut",
        kecamatan: "Tarogong Kidul",
        type: "pertanian",
        score: 92,
        population: 4520,
        area: 12.5,
        mainCommodity: "Padi",
        secondaryCommodities: [
            "Cabai",
            "Tomat",
            "Jagung"
        ],
        climate: {
            rainfall: 2500,
            temperature: 26,
            humidity: 75
        },
        topography: {
            elevation: 720,
            slope: "landai",
            soilType: "Latosol"
        },
        infrastructure: {
            roadAccess: "baik",
            electricity: 98,
            internet: 85,
            irrigation: "baik"
        },
        economy: {
            gdp: 45000,
            averageIncome: 3500000,
            umkmCount: 45,
            cooperativeCount: 3
        },
        social: {
            literacyRate: 95,
            healthFacilities: 2,
            schools: 5,
            communityGroups: 12
        },
        dnaMetrics: {
            productivity: 92,
            infrastructure: 88,
            humanResources: 85,
            economy: 90,
            social: 87,
            environment: 83
        },
        strengths: [
            "Lahan Subur",
            "Irigasi Teknis",
            "SDM Terlatih",
            "Akses Pasar Baik"
        ],
        problems: [
            "Cold Storage Terbatas",
            "Modal Kerja Kurang"
        ],
        opportunities: [
            "Ekspor Cabai",
            "Agrowisata",
            "Koperasi Digital"
        ],
        threats: [
            "Perubahan Iklim",
            "Hama Wereng"
        ],
        priority: "sedang",
        lastUpdated: "2026-03-07"
    },
    {
        id: "V002",
        name: "Cikondang",
        code: "3201012002",
        province: "Jawa Barat",
        kabupaten: "Garut",
        kecamatan: "Tarogong Kidul",
        type: "pertanian",
        score: 85,
        population: 3800,
        area: 10.2,
        mainCommodity: "Cabai",
        secondaryCommodities: [
            "Tomat",
            "Terong",
            "Bawang Merah"
        ],
        climate: {
            rainfall: 2400,
            temperature: 25,
            humidity: 73
        },
        topography: {
            elevation: 680,
            slope: "landai",
            soilType: "Andosol"
        },
        infrastructure: {
            roadAccess: "baik",
            electricity: 95,
            internet: 78,
            irrigation: "baik"
        },
        economy: {
            gdp: 38000,
            averageIncome: 3200000,
            umkmCount: 38,
            cooperativeCount: 2
        },
        social: {
            literacyRate: 93,
            healthFacilities: 1,
            schools: 4,
            communityGroups: 10
        },
        dnaMetrics: {
            productivity: 88,
            infrastructure: 82,
            humanResources: 80,
            economy: 85,
            social: 84,
            environment: 81
        },
        strengths: [
            "Komoditas Unggulan",
            "Kelompok Tani Aktif"
        ],
        problems: [
            "Fluktuasi Harga",
            "Akses Kredit Terbatas"
        ],
        opportunities: [
            "Kontrak Farming",
            "Pengolahan Pasca Panen"
        ],
        threats: [
            "Persaingan Impor",
            "Cuaca Ekstrem"
        ],
        priority: "sedang",
        lastUpdated: "2026-03-07"
    },
    // Sulawesi Selatan - Perikanan
    {
        id: "V003",
        name: "Pantai Indah",
        code: "7301022001",
        province: "Sulawesi Selatan",
        kabupaten: "Takalar",
        kecamatan: "Mappakasunggu",
        type: "perikanan",
        score: 88,
        population: 3200,
        area: 8.5,
        mainCommodity: "Udang Vaname",
        secondaryCommodities: [
            "Bandeng",
            "Rumput Laut",
            "Kepiting"
        ],
        climate: {
            rainfall: 1800,
            temperature: 28,
            humidity: 80
        },
        topography: {
            elevation: 5,
            slope: "datar",
            soilType: "Aluvial"
        },
        infrastructure: {
            roadAccess: "sedang",
            electricity: 92,
            internet: 70,
            irrigation: "tidak ada"
        },
        economy: {
            gdp: 42000,
            averageIncome: 3800000,
            umkmCount: 28,
            cooperativeCount: 2
        },
        social: {
            literacyRate: 88,
            healthFacilities: 1,
            schools: 3,
            communityGroups: 8
        },
        dnaMetrics: {
            productivity: 90,
            infrastructure: 75,
            humanResources: 82,
            economy: 88,
            social: 80,
            environment: 85
        },
        strengths: [
            "Akses Laut",
            "Budidaya Modern",
            "Koperasi Aktif"
        ],
        problems: [
            "Modal Kerja",
            "Teknologi Terbatas",
            "Cold Chain"
        ],
        opportunities: [
            "Ekspor Udang",
            "Wisata Bahari",
            "Pengolahan"
        ],
        threats: [
            "Penyakit Udang",
            "Pencemaran Laut"
        ],
        priority: "tinggi",
        lastUpdated: "2026-03-07"
    },
    // Bali - Wisata
    {
        id: "V004",
        name: "Wisata Hijau",
        code: "5101032001",
        province: "Bali",
        kabupaten: "Gianyar",
        kecamatan: "Ubud",
        type: "wisata",
        score: 95,
        population: 2100,
        area: 6.8,
        mainCommodity: "Pariwisata",
        secondaryCommodities: [
            "Kerajinan",
            "Kopi",
            "Seni"
        ],
        climate: {
            rainfall: 2000,
            temperature: 27,
            humidity: 78
        },
        topography: {
            elevation: 350,
            slope: "landai",
            soilType: "Regosol"
        },
        infrastructure: {
            roadAccess: "baik",
            electricity: 100,
            internet: 95,
            irrigation: "baik"
        },
        economy: {
            gdp: 85000,
            averageIncome: 5500000,
            umkmCount: 120,
            cooperativeCount: 5
        },
        social: {
            literacyRate: 98,
            healthFacilities: 3,
            schools: 6,
            communityGroups: 25
        },
        dnaMetrics: {
            productivity: 95,
            infrastructure: 98,
            humanResources: 92,
            economy: 96,
            social: 94,
            environment: 88
        },
        strengths: [
            "Destinasi Populer",
            "Budaya Kuat",
            "Infrastruktur Baik",
            "SDM Terampil"
        ],
        problems: [
            "Over Tourism",
            "Sampah",
            "Kemacetan"
        ],
        opportunities: [
            "Eco Tourism",
            "Digital Marketing",
            "Homestay"
        ],
        threats: [
            "Bencana Alam",
            "Pandemi"
        ],
        priority: "rendah",
        lastUpdated: "2026-03-07"
    },
    // Jawa Timur - Logistik
    {
        id: "V005",
        name: "Simpang Tiga",
        code: "3505042001",
        province: "Jawa Timur",
        kabupaten: "Malang",
        kecamatan: "Gondanglegi",
        type: "logistik",
        score: 83,
        population: 5800,
        area: 15.2,
        mainCommodity: "Distribusi",
        secondaryCommodities: [
            "Perdagangan",
            "Jasa",
            "Industri Kecil"
        ],
        climate: {
            rainfall: 2200,
            temperature: 29,
            humidity: 72
        },
        topography: {
            elevation: 450,
            slope: "datar",
            soilType: "Latosol"
        },
        infrastructure: {
            roadAccess: "baik",
            electricity: 98,
            internet: 88,
            irrigation: "sedang"
        },
        economy: {
            gdp: 52000,
            averageIncome: 4200000,
            umkmCount: 85,
            cooperativeCount: 4
        },
        social: {
            literacyRate: 94,
            healthFacilities: 2,
            schools: 7,
            communityGroups: 15
        },
        dnaMetrics: {
            productivity: 85,
            infrastructure: 90,
            humanResources: 88,
            economy: 87,
            social: 86,
            environment: 75
        },
        strengths: [
            "Lokasi Strategis",
            "Akses Jalan Baik",
            "Pasar Aktif"
        ],
        problems: [
            "Kepadatan",
            "Polusi",
            "Lahan Terbatas"
        ],
        opportunities: [
            "Warehouse",
            "E-Commerce Hub",
            "Cold Storage"
        ],
        threats: [
            "Kompetisi",
            "Biaya Operasional"
        ],
        priority: "sedang",
        lastUpdated: "2026-03-07"
    },
    // Generate 95 more villages programmatically
    ...generateAdditionalVillages(95)
];
function generateAdditionalVillages(count) {
    const provinces = [
        "Jawa Barat",
        "Jawa Tengah",
        "Jawa Timur",
        "Bali",
        "Sulawesi Selatan",
        "Sumatera Utara",
        "Kalimantan Timur",
        "NTB",
        "NTT",
        "Papua"
    ];
    const types = [
        "pertanian",
        "perikanan",
        "wisata",
        "logistik",
        "industri"
    ];
    const commodities = {
        pertanian: [
            "Padi",
            "Jagung",
            "Cabai",
            "Tomat",
            "Bawang",
            "Kopi",
            "Kakao",
            "Kelapa Sawit"
        ],
        perikanan: [
            "Udang",
            "Bandeng",
            "Nila",
            "Lele",
            "Rumput Laut",
            "Kepiting"
        ],
        wisata: [
            "Pariwisata",
            "Kerajinan",
            "Kuliner",
            "Budaya"
        ],
        logistik: [
            "Distribusi",
            "Perdagangan",
            "Jasa"
        ],
        industri: [
            "Manufaktur",
            "Pengolahan",
            "Kerajinan"
        ]
    };
    const villages = [];
    for(let i = 0; i < count; i++){
        const id = `V${String(i + 6).padStart(3, '0')}`;
        const province = provinces[Math.floor(Math.random() * provinces.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const score = Math.floor(Math.random() * 30) + 65 // 65-95
        ;
        const population = Math.floor(Math.random() * 5000) + 1500;
        villages.push({
            id,
            name: `Desa ${generateVillageName()}`,
            code: `${Math.floor(Math.random() * 9000) + 1000}${Math.floor(Math.random() * 900000) + 100000}`,
            province,
            kabupaten: `Kabupaten ${Math.floor(Math.random() * 20) + 1}`,
            kecamatan: `Kecamatan ${Math.floor(Math.random() * 10) + 1}`,
            type,
            score,
            population,
            area: Math.floor(Math.random() * 20) + 5,
            mainCommodity: commodities[type][Math.floor(Math.random() * commodities[type].length)],
            secondaryCommodities: commodities[type].slice(0, 3),
            climate: {
                rainfall: Math.floor(Math.random() * 1500) + 1500,
                temperature: Math.floor(Math.random() * 8) + 24,
                humidity: Math.floor(Math.random() * 20) + 70
            },
            topography: {
                elevation: Math.floor(Math.random() * 1000),
                slope: [
                    "datar",
                    "landai",
                    "curam"
                ][Math.floor(Math.random() * 3)],
                soilType: [
                    "Latosol",
                    "Andosol",
                    "Regosol",
                    "Aluvial"
                ][Math.floor(Math.random() * 4)]
            },
            infrastructure: {
                roadAccess: [
                    "baik",
                    "sedang",
                    "buruk"
                ][Math.floor(Math.random() * 3)],
                electricity: Math.floor(Math.random() * 30) + 70,
                internet: Math.floor(Math.random() * 40) + 50,
                irrigation: [
                    "baik",
                    "sedang",
                    "buruk",
                    "tidak ada"
                ][Math.floor(Math.random() * 4)]
            },
            economy: {
                gdp: Math.floor(Math.random() * 50000) + 20000,
                averageIncome: Math.floor(Math.random() * 3000000) + 2000000,
                umkmCount: Math.floor(Math.random() * 80) + 20,
                cooperativeCount: Math.floor(Math.random() * 5) + 1
            },
            social: {
                literacyRate: Math.floor(Math.random() * 20) + 80,
                healthFacilities: Math.floor(Math.random() * 3) + 1,
                schools: Math.floor(Math.random() * 6) + 2,
                communityGroups: Math.floor(Math.random() * 15) + 5
            },
            dnaMetrics: {
                productivity: Math.floor(Math.random() * 30) + 65,
                infrastructure: Math.floor(Math.random() * 30) + 65,
                humanResources: Math.floor(Math.random() * 30) + 65,
                economy: Math.floor(Math.random() * 30) + 65,
                social: Math.floor(Math.random() * 30) + 65,
                environment: Math.floor(Math.random() * 30) + 65
            },
            strengths: generateStrengths(type),
            problems: generateProblems(type),
            opportunities: generateOpportunities(type),
            threats: [
                "Perubahan Iklim",
                "Bencana Alam"
            ],
            priority: score > 85 ? "rendah" : score > 75 ? "sedang" : "tinggi",
            lastUpdated: "2026-03-07"
        });
    }
    return villages;
}
function generateVillageName() {
    const prefixes = [
        "Suka",
        "Maju",
        "Jaya",
        "Makmur",
        "Sejahtera",
        "Indah",
        "Subur",
        "Sentosa",
        "Damai",
        "Harapan"
    ];
    const suffixes = [
        "maju",
        "jaya",
        "makmur",
        "sejahtera",
        "indah",
        "asri",
        "permai",
        "raya",
        "baru",
        "lestari"
    ];
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
}
function generateStrengths(type) {
    const strengths = {
        pertanian: [
            "Lahan Subur",
            "Irigasi Baik",
            "SDM Terlatih",
            "Kelompok Tani Aktif"
        ],
        perikanan: [
            "Akses Laut",
            "Budidaya Modern",
            "Koperasi Aktif",
            "SDM Terampil"
        ],
        wisata: [
            "Destinasi Menarik",
            "Budaya Kuat",
            "Infrastruktur Baik",
            "Aksesibilitas"
        ],
        logistik: [
            "Lokasi Strategis",
            "Akses Jalan",
            "Pasar Aktif",
            "Infrastruktur"
        ],
        industri: [
            "Tenaga Kerja",
            "Bahan Baku",
            "Akses Pasar",
            "Teknologi"
        ]
    };
    return strengths[type].slice(0, 2);
}
function generateProblems(type) {
    const problems = {
        pertanian: [
            "Modal Kerja",
            "Cold Storage",
            "Akses Pasar",
            "Teknologi"
        ],
        perikanan: [
            "Modal Kerja",
            "Teknologi",
            "Cold Chain",
            "Penyakit"
        ],
        wisata: [
            "Over Tourism",
            "Sampah",
            "Kemacetan",
            "Infrastruktur"
        ],
        logistik: [
            "Kepadatan",
            "Polusi",
            "Biaya Operasional",
            "Kompetisi"
        ],
        industri: [
            "Modal",
            "Teknologi",
            "SDM",
            "Regulasi"
        ]
    };
    return problems[type].slice(0, 2);
}
function generateOpportunities(type) {
    const opportunities = {
        pertanian: [
            "Ekspor",
            "Agrowisata",
            "Koperasi Digital",
            "Pengolahan"
        ],
        perikanan: [
            "Ekspor",
            "Wisata Bahari",
            "Pengolahan",
            "Budidaya Modern"
        ],
        wisata: [
            "Eco Tourism",
            "Digital Marketing",
            "Homestay",
            "Event"
        ],
        logistik: [
            "Warehouse",
            "E-Commerce Hub",
            "Cold Storage",
            "Distribusi"
        ],
        industri: [
            "Ekspor",
            "Teknologi",
            "Kemitraan",
            "Diversifikasi"
        ]
    };
    return opportunities[type].slice(0, 3);
}
const sensorData = villages.slice(0, 50).map((village, index)=>({
        id: `S${String(index + 1).padStart(3, '0')}`,
        villageId: village.id,
        villageName: village.name,
        sensorType: [
            "soil",
            "weather",
            "water",
            "air_quality"
        ][index % 4],
        location: {
            lat: -6.2 + Math.random() * 8,
            lng: 106.8 + Math.random() * 15
        },
        readings: generateSensorReadings(30),
        lastReading: {
            value: Math.random() * 100,
            unit: getSensorUnit([
                "soil",
                "weather",
                "water",
                "air_quality"
            ][index % 4]),
            timestamp: new Date().toISOString(),
            status: Math.random() > 0.8 ? "warning" : "normal"
        }
    }));
function generateSensorReadings(count) {
    const readings = [];
    const now = new Date();
    for(let i = 0; i < count; i++){
        const timestamp = new Date(now.getTime() - i * 3600000) // hourly
        ;
        readings.push({
            timestamp: timestamp.toISOString(),
            value: Math.random() * 100,
            unit: "unit",
            status: Math.random() > 0.9 ? "warning" : "normal"
        });
    }
    return readings;
}
function getSensorUnit(type) {
    const units = {
        soil: "pH",
        weather: "°C",
        water: "cm",
        air_quality: "AQI"
    };
    return units[type];
}
const productionData = villages.slice(0, 50).flatMap((village)=>Array.from({
        length: 10
    }, (_, i)=>({
            id: `P${village.id}-${i + 1}`,
            villageId: village.id,
            villageName: village.name,
            commodity: village.mainCommodity,
            year: 2025 + Math.floor(i / 12),
            month: i % 12 + 1,
            production: Math.floor(Math.random() * 500) + 100,
            area: Math.floor(Math.random() * 50) + 10,
            yield: Math.random() * 5 + 2,
            quality: [
                "A",
                "B",
                "C"
            ][Math.floor(Math.random() * 3)],
            price: Math.floor(Math.random() * 10000) + 5000,
            revenue: Math.floor(Math.random() * 500) + 50
        })));
const diagnosticIssues = villages.slice(0, 50).flatMap((village, index)=>[
        {
            id: `D${String(index * 2 + 1).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: village.problems[0]?.includes("Modal") ? "ekonomi" : "infrastruktur",
            severity: village.score < 75 ? "high" : "medium",
            title: village.problems[0] || "Masalah Umum",
            description: `${village.problems[0]} menjadi kendala utama di ${village.name}`,
            rootCause: [
                "Keterbatasan Anggaran",
                "Kurangnya Akses",
                "Infrastruktur Terbatas"
            ],
            impact: `Menurunkan produktivitas hingga 30% dan pendapatan petani`,
            affectedPopulation: Math.floor(village.population * 0.6),
            estimatedLoss: Math.floor(Math.random() * 500) + 100,
            recommendations: [
                "Bantuan Modal",
                "Pelatihan",
                "Infrastruktur"
            ],
            status: Math.random() > 0.5 ? "open" : "in_progress",
            detectedDate: "2026-02-15"
        },
        {
            id: `D${String(index * 2 + 2).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "sdm",
            severity: "medium",
            title: village.problems[1] || "Masalah SDM",
            description: `Kurangnya ${village.problems[1]} di ${village.name}`,
            rootCause: [
                "Pendidikan Terbatas",
                "Migrasi",
                "Kurangnya Pelatihan"
            ],
            impact: `Menghambat adopsi teknologi dan inovasi`,
            affectedPopulation: Math.floor(village.population * 0.4),
            estimatedLoss: Math.floor(Math.random() * 300) + 50,
            recommendations: [
                "Pelatihan Teknis",
                "Pendampingan",
                "Sertifikasi"
            ],
            status: "open",
            detectedDate: "2026-02-20"
        }
    ]);
const recommendations = villages.slice(0, 40).flatMap((village, index)=>[
        {
            id: `R${String(index * 5 + 1).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "komoditas",
            title: `Diversifikasi ${village.mainCommodity}`,
            description: `Mengembangkan varietas unggul dan diversifikasi produk ${village.mainCommodity}`,
            rationale: `Potensi lahan dan iklim mendukung pengembangan komoditas unggulan`,
            expectedImpact: `Peningkatan produktivitas 40% dan pendapatan 50%`,
            estimatedCost: 500,
            estimatedRevenue: 1200,
            roi: 140,
            timeframe: "menengah",
            priority: "tinggi",
            feasibility: 85,
            aiConfidence: 92,
            implementationSteps: [
                "Survey Lahan",
                "Pelatihan Petani",
                "Pengadaan Bibit",
                "Monitoring"
            ],
            requiredResources: [
                "Bibit Unggul",
                "Pupuk",
                "Peralatan",
                "Tenaga Ahli"
            ],
            risks: [
                "Cuaca Ekstrem",
                "Hama Penyakit",
                "Fluktuasi Harga"
            ]
        },
        {
            id: `R${String(index * 5 + 2).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "investasi",
            title: "Pembangunan Cold Storage",
            description: "Investasi fasilitas penyimpanan dingin untuk menjaga kualitas hasil panen",
            rationale: "Mengurangi kerugian pasca panen hingga 60%",
            expectedImpact: "Peningkatan nilai jual 30% dan pengurangan waste 50%",
            estimatedCost: 2000,
            estimatedRevenue: 4500,
            roi: 125,
            timeframe: "panjang",
            priority: "tinggi",
            feasibility: 75,
            aiConfidence: 88,
            implementationSteps: [
                "Studi Kelayakan",
                "Desain",
                "Konstruksi",
                "Operasional"
            ],
            requiredResources: [
                "Lahan",
                "Teknologi Pendingin",
                "Listrik",
                "Operator"
            ],
            risks: [
                "Biaya Operasional Tinggi",
                "Kerusakan Teknis"
            ]
        },
        {
            id: `R${String(index * 5 + 3).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "kelembagaan",
            title: "Penguatan Koperasi Digital",
            description: "Transformasi koperasi tradisional menjadi platform digital",
            rationale: "Meningkatkan efisiensi dan jangkauan pasar",
            expectedImpact: "Peningkatan anggota 100% dan transaksi 200%",
            estimatedCost: 300,
            estimatedRevenue: 800,
            roi: 167,
            timeframe: "pendek",
            priority: "sedang",
            feasibility: 90,
            aiConfidence: 85,
            implementationSteps: [
                "Platform Development",
                "Training",
                "Marketing",
                "Scaling"
            ],
            requiredResources: [
                "Software",
                "Hardware",
                "Internet",
                "SDM IT"
            ],
            risks: [
                "Adopsi Lambat",
                "Kompetisi"
            ]
        },
        {
            id: `R${String(index * 5 + 4).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "pasar",
            title: "Akses Pasar Ekspor",
            description: "Membuka jalur ekspor untuk produk unggulan desa",
            rationale: "Harga ekspor 2-3x lebih tinggi dari pasar lokal",
            expectedImpact: "Peningkatan pendapatan petani 150%",
            estimatedCost: 800,
            estimatedRevenue: 3000,
            roi: 275,
            timeframe: "panjang",
            priority: "tinggi",
            feasibility: 70,
            aiConfidence: 80,
            implementationSteps: [
                "Sertifikasi",
                "Kemitraan",
                "Logistik",
                "Marketing"
            ],
            requiredResources: [
                "Sertifikat GAP",
                "Cold Chain",
                "Eksportir",
                "Quality Control"
            ],
            risks: [
                "Regulasi",
                "Kompetisi Global",
                "Kualitas"
            ]
        },
        {
            id: `R${String(index * 5 + 5).padStart(3, '0')}`,
            villageId: village.id,
            villageName: village.name,
            category: "program",
            title: "Program Agrowisata Terpadu",
            description: "Mengembangkan wisata pertanian sebagai sumber pendapatan tambahan",
            rationale: "Memanfaatkan potensi wisata dan edukasi pertanian",
            expectedImpact: "Pendapatan tambahan 500 juta/tahun",
            estimatedCost: 600,
            estimatedRevenue: 1500,
            roi: 150,
            timeframe: "menengah",
            priority: "sedang",
            feasibility: 80,
            aiConfidence: 78,
            implementationSteps: [
                "Desain Paket Wisata",
                "Infrastruktur",
                "Promosi",
                "Operasional"
            ],
            requiredResources: [
                "Lahan",
                "Fasilitas",
                "Pemandu",
                "Marketing"
            ],
            risks: [
                "Musim",
                "Kompetisi",
                "Aksesibilitas"
            ]
        }
    ]);
function getVillageById(id) {
    return villages.find((v)=>v.id === id);
}
function getVillagesByProvince(province) {
    return villages.filter((v)=>v.province === province);
}
function getVillagesByType(type) {
    return villages.filter((v)=>v.type === type);
}
function getTopVillages(limit = 10) {
    return [
        ...villages
    ].sort((a, b)=>b.score - a.score).slice(0, limit);
}
function getPriorityVillages() {
    return villages.filter((v)=>v.priority === "tinggi");
}
function getVillageStats() {
    return {
        total: villages.length,
        byType: {
            pertanian: villages.filter((v)=>v.type === "pertanian").length,
            perikanan: villages.filter((v)=>v.type === "perikanan").length,
            wisata: villages.filter((v)=>v.type === "wisata").length,
            logistik: villages.filter((v)=>v.type === "logistik").length,
            industri: villages.filter((v)=>v.type === "industri").length
        },
        byPriority: {
            tinggi: villages.filter((v)=>v.priority === "tinggi").length,
            sedang: villages.filter((v)=>v.priority === "sedang").length,
            rendah: villages.filter((v)=>v.priority === "rendah").length
        },
        averageScore: Math.round(villages.reduce((sum, v)=>sum + v.score, 0) / villages.length),
        totalPopulation: villages.reduce((sum, v)=>sum + v.population, 0)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasterKomoditasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript) <export default as Wheat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/fish.js [app-client] (ecmascript) <export default as Fish>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/mock-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
// Get unique commodities from production data
const uniqueCommodities = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productionData"].map((p)=>p.commodity)));
// Calculate commodity statistics
const commodityStats = uniqueCommodities.map((commodity)=>{
    const commodityProduction = __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productionData"].filter((p)=>p.commodity === commodity);
    const totalProduction = commodityProduction.reduce((sum, p)=>sum + p.production, 0);
    const avgPrice = commodityProduction.reduce((sum, p)=>sum + p.price, 0) / commodityProduction.length;
    const totalRevenue = commodityProduction.reduce((sum, p)=>sum + p.revenue, 0);
    // Determine category based on commodity name
    let kategori = "Pertanian";
    if (commodity.toLowerCase().includes("udang") || commodity.toLowerCase().includes("bandeng") || commodity.toLowerCase().includes("lele") || commodity.toLowerCase().includes("nila")) {
        kategori = "Perikanan";
    } else if (commodity.toLowerCase().includes("sawit") || commodity.toLowerCase().includes("kopi") || commodity.toLowerCase().includes("kakao")) {
        kategori = "Perkebunan";
    } else if (commodity.toLowerCase().includes("kayu") || commodity.toLowerCase().includes("jati")) {
        kategori = "Kehutanan";
    }
    return {
        id: commodity,
        kode: `KOM-${uniqueCommodities.indexOf(commodity) + 1}`.padStart(7, '0'),
        nama: commodity,
        kategori,
        satuan: "Ton",
        hargaRata: avgPrice,
        produksi: totalProduction,
        revenue: totalRevenue,
        trend: Math.random() > 0.3 ? "naik" : Math.random() > 0.5 ? "stabil" : "turun"
    };
}).slice(0, 12);
// Generate production trend for last 6 months
const productionTrend = Array.from({
    length: 6
}, (_, i)=>{
    const month = new Date();
    month.setMonth(month.getMonth() - (5 - i));
    return {
        bulan: month.toLocaleDateString("id-ID", {
            month: "short"
        }),
        padi: 4.2 + Math.random() * 0.8,
        jagung: 1.8 + Math.random() * 0.4,
        sawit: 4.0 + Math.random() * 0.3
    };
});
const columns = [
    {
        key: "kode",
        label: "Kode"
    },
    {
        key: "nama",
        label: "Nama Komoditas"
    },
    {
        key: "kategori",
        label: "Kategori",
        render: (item)=>{
            const colors = {
                Pertanian: "bg-success/20 text-success",
                Perikanan: "bg-info/20 text-info",
                Perkebunan: "bg-warning/20 text-warning",
                Kehutanan: "bg-chart-2/20 text-chart-2"
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "secondary",
                className: colors[item.kategori],
                children: item.kategori
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    },
    {
        key: "satuan",
        label: "Satuan"
    },
    {
        key: "hargaRata",
        label: "Harga Rata-rata/Kg",
        render: (item)=>`Rp ${item.hargaRata.toLocaleString("id-ID")}`
    },
    {
        key: "produksi",
        label: "Total Produksi",
        render: (item)=>`${item.produksi.toLocaleString("id-ID")} ${item.satuan}`
    },
    {
        key: "trend",
        label: "Trend",
        render: (item)=>{
            const styles = {
                naik: "bg-success/20 text-success",
                turun: "bg-destructive/20 text-destructive",
                stabil: "bg-muted text-muted-foreground"
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "secondary",
                className: styles[item.trend],
                children: item.trend.charAt(0).toUpperCase() + item.trend.slice(1)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
];
// Calculate category counts
const categoryCount = {
    pertanian: commodityStats.filter((c)=>c.kategori === "Pertanian").length,
    perikanan: commodityStats.filter((c)=>c.kategori === "Perikanan").length,
    perkebunan: commodityStats.filter((c)=>c.kategori === "Perkebunan").length,
    kehutanan: commodityStats.filter((c)=>c.kategori === "Kehutanan").length
};
function MasterKomoditasPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {
        title: "Master Data Komoditas",
        description: "Pengelolaan data komoditas pertanian, perikanan, perkebunan, dan kehutanan",
        breadcrumb: [
            {
                label: "Dashboard",
                href: "/"
            },
            {
                label: "Data Layer"
            },
            {
                label: "Master Komoditas"
            }
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Komoditas Pertanian",
                        value: categoryCount.pertanian.toString(),
                        change: 5.2,
                        changeLabel: "jenis aktif",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"], {
                            className: "h-5 w-5 text-success"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                            lineNumber: 153,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Komoditas Perikanan",
                        value: categoryCount.perikanan.toString(),
                        change: 3.8,
                        changeLabel: "jenis aktif",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__["Fish"], {
                            className: "h-5 w-5 text-info"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                            lineNumber: 160,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Komoditas Perkebunan",
                        value: categoryCount.perkebunan.toString(),
                        change: 2.1,
                        changeLabel: "jenis aktif",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"], {
                            className: "h-5 w-5 text-warning"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                            lineNumber: 167,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                        title: "Total Komoditas",
                        value: uniqueCommodities.length.toString(),
                        change: 8.5,
                        changeLabel: "jenis terdaftar",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"], {
                            className: "h-5 w-5 text-chart-2"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                            lineNumber: 174,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-8 border-border bg-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "flex flex-row items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-card-foreground",
                                children: "Trend Produksi Komoditas Utama"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 300,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                    data: productionTrend,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "colorPadi",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "5%",
                                                            stopColor: "var(--color-success)",
                                                            stopOpacity: 0.3
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "95%",
                                                            stopColor: "var(--color-success)",
                                                            stopOpacity: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "colorJagung",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "5%",
                                                            stopColor: "var(--color-warning)",
                                                            stopOpacity: 0.3
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "95%",
                                                            stopColor: "var(--color-warning)",
                                                            stopOpacity: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "colorSawit",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "5%",
                                                            stopColor: "var(--color-info)",
                                                            stopOpacity: 0.3
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "95%",
                                                            stopColor: "var(--color-info)",
                                                            stopOpacity: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "bulan",
                                            axisLine: false,
                                            tickLine: false,
                                            tick: {
                                                fill: "var(--color-muted-foreground)",
                                                fontSize: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            axisLine: false,
                                            tickLine: false,
                                            tick: {
                                                fill: "var(--color-muted-foreground)",
                                                fontSize: 12
                                            },
                                            tickFormatter: (value)=>`${value} Jt`
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: "var(--color-card)",
                                                border: "1px solid var(--color-border)",
                                                borderRadius: "8px"
                                            },
                                            formatter: (value)=>[
                                                    `${value.toFixed(1)} Juta Ton`,
                                                    ""
                                                ]
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "padi",
                                            stroke: "var(--color-success)",
                                            fill: "url(#colorPadi)",
                                            strokeWidth: 2,
                                            name: "Padi"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "jagung",
                                            stroke: "var(--color-warning)",
                                            fill: "url(#colorJagung)",
                                            strokeWidth: 2,
                                            name: "Jagung"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "sawit",
                                            stroke: "var(--color-info)",
                                            fill: "url(#colorSawit)",
                                            strokeWidth: 2,
                                            name: "Kelapa Sawit"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 w-3 rounded-full bg-success"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Padi"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 w-3 rounded-full bg-warning"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Jagung"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 w-3 rounded-full bg-info"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Kelapa Sawit"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 grid gap-4 md:grid-cols-4",
                children: commodityStats.slice(0, 4).map((commodity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-border bg-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-lg p-3 ${index === 0 ? "bg-success/20" : index === 1 ? "bg-warning/20" : index === 2 ? "bg-info/20" : "bg-chart-2/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: `h-6 w-6 ${index === 0 ? "text-success" : index === 1 ? "text-warning" : index === 2 ? "text-info" : "text-chart-2"}`
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: commodity.nama
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold text-card-foreground",
                                                children: [
                                                    commodity.produksi.toLocaleString("id-ID"),
                                                    " Ton"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-success",
                                                children: [
                                                    "Rp ",
                                                    (commodity.revenue / 1000).toFixed(0),
                                                    "M"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    }, commodity.id, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-foreground",
                        children: [
                            "Daftar Komoditas (Menampilkan ",
                            commodityStats.length,
                            " dari ",
                            uniqueCommodities.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    "Import Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    "Tambah Komoditas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                data: commodityStats,
                columns: columns,
                searchPlaceholder: "Cari nama komoditas atau kode...",
                onView: (item)=>console.log("View", item),
                onEdit: (item)=>console.log("Edit", item),
                onDelete: (item)=>console.log("Delete", item)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/app/data/master-komoditas/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c = MasterKomoditasPage;
var _c;
__turbopack_context__.k.register(_c, "MasterKomoditasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dna-desa-ai-presisi_855e0087._.js.map