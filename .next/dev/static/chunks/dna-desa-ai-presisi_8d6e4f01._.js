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
"[project]/dna-desa-ai-presisi/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/dna-desa-ai-presisi/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VillageDNACard",
    ()=>VillageDNACard,
    "sampleVillages",
    ()=>sampleVillages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/progress.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const typeConfig = {
    pertanian: {
        label: "Pertanian",
        color: "bg-success/20 text-success border-success/30"
    },
    perikanan: {
        label: "Perikanan",
        color: "bg-info/20 text-info border-info/30"
    },
    wisata: {
        label: "Wisata",
        color: "bg-chart-2/20 text-chart-2 border-chart-2/30"
    },
    logistik: {
        label: "Logistik",
        color: "bg-warning/20 text-warning border-warning/30"
    }
};
function VillageDNACard({ village }) {
    const config = typeConfig[village.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-card-foreground group-hover:text-primary",
                                children: village.name
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex items-center gap-1 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: village.province
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border", config.color),
                        children: config.label
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Skor Potensi"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-primary",
                                children: [
                                    village.score,
                                    "/100"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        value: village.score,
                        className: "mt-2 h-2"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-secondary/50 p-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "mx-auto h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-muted-foreground",
                                children: "Penduduk"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-card-foreground",
                                children: village.population.toLocaleString("id-ID")
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-secondary/50 p-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                className: "mx-auto h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-muted-foreground",
                                children: "Curah Hujan"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-card-foreground",
                                children: [
                                    village.climate.rainfall,
                                    " mm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-secondary/50 p-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                className: "mx-auto h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-muted-foreground",
                                children: "Suhu"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-card-foreground",
                                children: [
                                    village.climate.temperature,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-4 w-4 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-card-foreground",
                        children: [
                            "Komoditas Utama: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: village.mainCommodity
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 86,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-success",
                                children: "Kekuatan:"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex flex-wrap gap-1",
                                children: village.strengths.slice(0, 2).map((strength)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-success/10 px-2 py-0.5 text-xs text-success",
                                        children: strength
                                    }, strength, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-warning",
                                children: "Tantangan:"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex flex-wrap gap-1",
                                children: village.challenges.slice(0, 2).map((challenge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-warning/10 px-2 py-0.5 text-xs text-warning",
                                        children: challenge
                                    }, challenge, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = VillageDNACard;
const sampleVillages = [
    {
        id: "1",
        name: "Desa Sukamaju",
        province: "Jawa Barat",
        type: "pertanian",
        score: 85,
        population: 4520,
        mainCommodity: "Padi & Cabai",
        climate: {
            rainfall: 2500,
            temperature: 26
        },
        strengths: [
            "Lahan Subur",
            "Irigasi Baik"
        ],
        challenges: [
            "Cold Storage",
            "Akses Pasar"
        ]
    },
    {
        id: "2",
        name: "Desa Pantai Indah",
        province: "Sulawesi Selatan",
        type: "perikanan",
        score: 78,
        population: 3200,
        mainCommodity: "Udang & Ikan",
        climate: {
            rainfall: 1800,
            temperature: 28
        },
        strengths: [
            "Akses Laut",
            "SDM Terampil"
        ],
        challenges: [
            "Modal Kerja",
            "Teknologi"
        ]
    },
    {
        id: "3",
        name: "Desa Wisata Hijau",
        province: "Bali",
        type: "wisata",
        score: 92,
        population: 2100,
        mainCommodity: "Pariwisata",
        climate: {
            rainfall: 2000,
            temperature: 27
        },
        strengths: [
            "Destinasi Populer",
            "Budaya Kuat"
        ],
        challenges: [
            "Over Tourism",
            "Sampah"
        ]
    },
    {
        id: "4",
        name: "Desa Simpang Tiga",
        province: "Sumatera Utara",
        type: "logistik",
        score: 70,
        population: 5800,
        mainCommodity: "Distribusi",
        climate: {
            rainfall: 2200,
            temperature: 29
        },
        strengths: [
            "Lokasi Strategis",
            "Infrastruktur"
        ],
        challenges: [
            "Kepadatan",
            "Polusi"
        ]
    }
];
var _c;
__turbopack_context__.k.register(_c, "VillageDNACard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductionTrendChart",
    ()=>ProductionTrendChart,
    "RegionalPerformanceChart",
    ()=>RegionalPerformanceChart,
    "VillageTypeChart",
    ()=>VillageTypeChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
"use client";
;
;
// Production Trend Data
const productionData = [
    {
        month: "Jan",
        padi: 4200,
        jagung: 2800,
        cabai: 1800
    },
    {
        month: "Feb",
        padi: 4500,
        jagung: 2600,
        cabai: 2100
    },
    {
        month: "Mar",
        padi: 4800,
        jagung: 3100,
        cabai: 2400
    },
    {
        month: "Apr",
        padi: 5200,
        jagung: 3400,
        cabai: 2200
    },
    {
        month: "Mei",
        padi: 5800,
        jagung: 3800,
        cabai: 2600
    },
    {
        month: "Jun",
        padi: 5500,
        jagung: 3600,
        cabai: 2900
    },
    {
        month: "Jul",
        padi: 5900,
        jagung: 4000,
        cabai: 3200
    },
    {
        month: "Agu",
        padi: 6200,
        jagung: 4200,
        cabai: 3500
    }
];
// Village Type Distribution
const villageTypeData = [
    {
        name: "Pertanian",
        value: 45,
        color: "hsl(145, 63%, 49%)"
    },
    {
        name: "Perikanan",
        value: 20,
        color: "hsl(250, 63%, 60%)"
    },
    {
        name: "Wisata",
        value: 15,
        color: "hsl(280, 60%, 60%)"
    },
    {
        name: "Logistik",
        value: 12,
        color: "hsl(85, 60%, 55%)"
    },
    {
        name: "Lainnya",
        value: 8,
        color: "hsl(0, 0%, 50%)"
    }
];
// Regional Performance
const regionalData = [
    {
        region: "Jawa",
        desa: 1250,
        score: 78
    },
    {
        region: "Sumatera",
        desa: 890,
        score: 72
    },
    {
        region: "Kalimantan",
        desa: 520,
        score: 68
    },
    {
        region: "Sulawesi",
        desa: 430,
        score: 71
    },
    {
        region: "Papua",
        desa: 280,
        score: 62
    },
    {
        region: "Bali-Nusa",
        desa: 350,
        score: 82
    }
];
const CustomTooltip = ({ active, payload, label })=>{
    if (active && payload && payload.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-border bg-popover p-3 shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-2 font-medium text-popover-foreground",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                payload.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        style: {
                            color: entry.color
                        },
                        children: [
                            entry.name,
                            ": ",
                            entry.value.toLocaleString("id-ID")
                        ]
                    }, index, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
_c = CustomTooltip;
function ProductionTrendChart() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-card-foreground",
                        children: "Tren Produksi Komoditas"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Volume produksi per bulan (ton)"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: productionData,
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
                                            stopColor: "hsl(160, 60%, 45%)",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "95%",
                                            stopColor: "hsl(160, 60%, 45%)",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
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
                                            stopColor: "hsl(280, 60%, 60%)",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "95%",
                                            stopColor: "hsl(280, 60%, 60%)",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "colorCabai",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "5%",
                                            stopColor: "hsl(85, 60%, 55%)",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "95%",
                                            stopColor: "hsl(85, 60%, 55%)",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "hsl(0, 0%, 20%)"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "month",
                            stroke: "hsl(0, 0%, 50%)",
                            fontSize: 12
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "hsl(0, 0%, 50%)",
                            fontSize: 12
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                lineNumber: 92,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "padi",
                            name: "Padi",
                            stroke: "hsl(160, 60%, 45%)",
                            fillOpacity: 1,
                            fill: "url(#colorPadi)",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "jagung",
                            name: "Jagung",
                            stroke: "hsl(280, 60%, 60%)",
                            fillOpacity: 1,
                            fill: "url(#colorJagung)",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "cabai",
                            name: "Cabai",
                            stroke: "hsl(85, 60%, 55%)",
                            fillOpacity: 1,
                            fill: "url(#colorCabai)",
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = ProductionTrendChart;
function VillageTypeChart() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-card-foreground",
                        children: "Distribusi Tipe Desa"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Berdasarkan klasifikasi DNA Desa"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                            data: villageTypeData,
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 60,
                            outerRadius: 100,
                            paddingAngle: 5,
                            dataKey: "value",
                            children: villageTypeData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                    fill: entry.color
                                }, `cell-${index}`, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                backgroundColor: "hsl(260, 10%, 14%)",
                                border: "1px solid hsl(260, 10%, 25%)",
                                borderRadius: "8px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            formatter: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "hsl(0, 0%, 98%)"
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                    lineNumber: 157,
                                    columnNumber: 35
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c2 = VillageTypeChart;
function RegionalPerformanceChart() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-card-foreground",
                        children: "Performa Regional"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Jumlah desa dan skor rata-rata per wilayah"
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: regionalData,
                    layout: "vertical",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "hsl(0, 0%, 20%)"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            type: "number",
                            stroke: "hsl(0, 0%, 50%)",
                            fontSize: 12
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            dataKey: "region",
                            type: "category",
                            stroke: "hsl(0, 0%, 50%)",
                            fontSize: 12,
                            width: 80
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                                lineNumber: 177,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "desa",
                            name: "Jumlah Desa",
                            fill: "hsl(160, 60%, 45%)",
                            radius: [
                                0,
                                4,
                                4,
                                0
                            ]
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "score",
                            name: "Skor Rata-rata",
                            fill: "hsl(250, 60%, 60%)",
                            radius: [
                                0,
                                4,
                                4,
                                0
                            ]
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_c3 = RegionalPerformanceChart;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CustomTooltip");
__turbopack_context__.k.register(_c1, "ProductionTrendChart");
__turbopack_context__.k.register(_c2, "VillageTypeChart");
__turbopack_context__.k.register(_c3, "RegionalPerformanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertsPanel",
    ()=>AlertsPanel,
    "RecommendationPanel",
    ()=>RecommendationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const recommendations = [
    {
        id: "1",
        type: "komoditas",
        title: "Diversifikasi ke Cabai Merah",
        description: "Kondisi agroklimat sangat mendukung untuk budidaya cabai merah dengan potensi hasil 8-10 ton/ha",
        village: "Desa Sukamaju",
        priority: "high",
        impact: "Peningkatan pendapatan petani hingga 40%",
        status: "new"
    },
    {
        id: "2",
        type: "investasi",
        title: "Pembangunan Cold Storage",
        description: "Diperlukan fasilitas penyimpanan berpendingin untuk mengurangi loss pascapanen yang mencapai 25%",
        village: "Desa Pantai Indah",
        priority: "high",
        impact: "Pengurangan loss pascapanen hingga 15%",
        status: "in_progress"
    },
    {
        id: "3",
        type: "kelembagaan",
        title: "Penguatan Koperasi Tani",
        description: "Integrasi koperasi dengan marketplace digital untuk akses pasar yang lebih luas",
        village: "Desa Simpang Tiga",
        priority: "medium",
        impact: "Peningkatan volume transaksi 60%",
        status: "new"
    },
    {
        id: "4",
        type: "pasar",
        title: "Akses Pasar Ekspor",
        description: "Produk memenuhi standar ekspor ke Singapura dan Malaysia",
        village: "Desa Wisata Hijau",
        priority: "medium",
        impact: "Nilai jual produk naik 2x lipat",
        status: "completed"
    }
];
const typeConfig = {
    komoditas: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        label: "Komoditas",
        color: "text-success"
    },
    investasi: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        label: "Investasi",
        color: "text-info"
    },
    kelembagaan: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        label: "Kelembagaan",
        color: "text-chart-2"
    },
    pasar: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        label: "Pasar",
        color: "text-warning"
    }
};
const priorityConfig = {
    high: {
        label: "Prioritas Tinggi",
        color: "bg-destructive/20 text-destructive border-destructive/30"
    },
    medium: {
        label: "Prioritas Sedang",
        color: "bg-warning/20 text-warning border-warning/30"
    },
    low: {
        label: "Prioritas Rendah",
        color: "bg-muted text-muted-foreground border-muted"
    }
};
const statusConfig = {
    new: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        label: "Baru",
        color: "text-info"
    },
    in_progress: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        label: "Dalam Proses",
        color: "text-warning"
    },
    completed: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        label: "Selesai",
        color: "text-success"
    }
};
function RecommendationPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-border p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-primary/20 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-card-foreground",
                                        children: "Rekomendasi AI"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Saran berdasarkan analisis data terkini"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        children: [
                            "Lihat Semua",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-border",
                children: recommendations.map((rec)=>{
                    const TypeIcon = typeConfig[rec.type].icon;
                    const StatusIcon = statusConfig[rec.status].icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group p-5 transition-colors hover:bg-secondary/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg bg-secondary p-2", typeConfig[rec.type].color),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypeIcon, {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium text-card-foreground group-hover:text-primary",
                                                            children: rec.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 flex items-center gap-2 text-sm text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 25
                                                                }, this),
                                                                rec.village
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border", priorityConfig[rec.priority].color),
                                                    children: priorityConfig[rec.priority].label
                                                }, void 0, false, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-muted-foreground",
                                            children: rec.description
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-3 w-3 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-primary",
                                                            children: rec.impact
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs", statusConfig[rec.status].color),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this),
                                                        statusConfig[rec.status].label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    }, rec.id, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = RecommendationPanel;
function AlertsPanel() {
    const alerts = [
        {
            id: "1",
            type: "warning",
            title: "Risiko Gagal Panen Terdeteksi",
            message: "5 desa di Kabupaten Bandung mengalami kekurangan air untuk lahan padi",
            time: "2 jam lalu"
        },
        {
            id: "2",
            type: "info",
            title: "Harga Cabai Turun 15%",
            message: "Over supply di pasar regional Jawa Barat",
            time: "4 jam lalu"
        },
        {
            id: "3",
            type: "success",
            title: "Target Produksi Tercapai",
            message: "Klaster desa hortikultura Magelang mencapai 120% target",
            time: "1 hari lalu"
        }
    ];
    const alertConfig = {
        warning: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            color: "text-warning bg-warning/10"
        },
        info: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
            color: "text-info bg-info/10"
        },
        success: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            color: "text-success bg-success/10"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-warning/20 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-5 w-5 text-warning"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-card-foreground",
                                children: "Alert Terkini"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Peringatan dan notifikasi penting"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: alerts.map((alert)=>{
                    const config = alertConfig[alert.type];
                    const Icon = config.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 rounded-lg border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-2", config.color),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-card-foreground",
                                        children: alert.title
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-muted-foreground",
                                        children: alert.message
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-muted-foreground",
                                        children: alert.time
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this)
                        ]
                    }, alert.id, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c1 = AlertsPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "RecommendationPanel");
__turbopack_context__.k.register(_c1, "AlertsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataHubPanel",
    ()=>DataHubPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/progress.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const dataSources = [
    {
        id: "1",
        name: "Data BPS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        records: 74520,
        lastSync: "5 menit lalu",
        status: "synced",
        completeness: 98
    },
    {
        id: "2",
        name: "Master Desa",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        records: 83721,
        lastSync: "10 menit lalu",
        status: "synced",
        completeness: 100
    },
    {
        id: "3",
        name: "Data Penduduk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        records: 2500000,
        lastSync: "Sedang sinkronisasi",
        status: "syncing",
        completeness: 75
    },
    {
        id: "4",
        name: "Sensor IoT",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
        records: 1245,
        lastSync: "Real-time",
        status: "synced",
        completeness: 92
    },
    {
        id: "5",
        name: "Data Geospasial",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        records: 45200,
        lastSync: "1 jam lalu",
        status: "synced",
        completeness: 88
    },
    {
        id: "6",
        name: "Data Visual/Drone",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        records: 12500,
        lastSync: "Error koneksi",
        status: "error",
        completeness: 45
    }
];
const statusConfig = {
    synced: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        label: "Tersinkron",
        color: "text-success"
    },
    syncing: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
        label: "Sinkronisasi",
        color: "text-info animate-spin"
    },
    error: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
        label: "Error",
        color: "text-destructive"
    }
};
function DataHubPanel() {
    const totalRecords = dataSources.reduce((sum, source)=>sum + source.records, 0);
    const avgCompleteness = Math.round(dataSources.reduce((sum, source)=>sum + source.completeness, 0) / dataSources.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-border p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-primary/20 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-card-foreground",
                                        children: "Village Data Hub"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Status integrasi sumber data"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-secondary/50 p-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-card-foreground",
                                        children: [
                                            (totalRecords / 1000000).toFixed(1),
                                            "M"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Total Records"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-secondary/50 p-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-primary",
                                        children: [
                                            avgCompleteness,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Kelengkapan"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-secondary/50 p-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-success",
                                        children: "5/6"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Sumber Aktif"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-border",
                children: dataSources.map((source)=>{
                    const StatusIcon = statusConfig[source.status].icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 p-4 hover:bg-secondary/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg bg-secondary p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(source.icon, {
                                    className: "h-5 w-5 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-card-foreground",
                                                children: source.name
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs", statusConfig[source.status].color),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this),
                                                    statusConfig[source.status].label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex items-center gap-4 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    source.records.toLocaleString("id-ID"),
                                                    " records"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    source.lastSync
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: source.completeness,
                                                className: "h-1.5 flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    source.completeness,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        ]
                    }, source.id, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c = DataHubPanel;
var _c;
__turbopack_context__.k.register(_c, "DataHubPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAssistantPanel",
    ()=>AIAssistantPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sampleQuestions = [
    "Desa mana yang cocok untuk program hortikultura?",
    "Apa risiko utama di Kabupaten Bandung?",
    "Rekomendasi investasi untuk desa perikanan?",
    "Analisis produksi padi bulan ini"
];
const initialMessages = [
    {
        id: "1",
        role: "assistant",
        content: "Halo! Saya AI Asisten untuk analisis desa. Saya bisa membantu Anda memahami data desa, memberikan rekomendasi kebijakan, dan menjawab pertanyaan seputar pembangunan desa. Apa yang ingin Anda ketahui?",
        timestamp: new Date()
    }
];
function AIAssistantPanel() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessages);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSend = async ()=>{
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setIsTyping(true);
        // Simulate AI response
        setTimeout(()=>{
            const responses = {
                "hortikultura": "Berdasarkan analisis DNA Desa, 5 desa paling cocok untuk program hortikultura adalah:\n\n1. **Desa Sukamaju** (Jawa Barat) - Skor 85/100\n   - Curah hujan optimal: 2500mm/tahun\n   - Lahan subur dengan pH 6.5\n   - Akses jalan provinsi baik\n\n2. **Desa Mekar Sari** (Jawa Tengah) - Skor 82/100\n3. **Desa Tani Jaya** (DIY) - Skor 80/100\n\nRekomendasi komoditas: Cabai, Tomat, Bawang Merah",
                "risiko": "Risiko utama di Kabupaten Bandung berdasarkan analisis terkini:\n\n⚠️ **Kekeringan** - 12 desa terindikasi kekurangan air\n⚠️ **Over Supply Cabai** - Harga turun 15% dalam 2 minggu\n⚠️ **Infrastruktur** - 5 cold storage kapasitas penuh\n\nRekomendasi mitigasi:\n- Redistribusi hasil panen ke daerah defisit\n- Program irigasi tetes untuk desa rawan kering",
                "default": "Terima kasih atas pertanyaannya. Berdasarkan data Village Data Hub, saya menemukan beberapa insight menarik yang bisa membantu pengambilan keputusan. Mari kita analisis lebih dalam berdasarkan DNA Desa dan indikator yang tersedia.\n\nApakah Anda ingin saya fokus pada aspek tertentu seperti komoditas, infrastruktur, atau kelembagaan?"
            };
            const responseKey = Object.keys(responses).find((key)=>input.toLowerCase().includes(key)) || "default";
            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responses[responseKey],
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
            setIsTyping(false);
        }, 1500);
    };
    const handleQuickQuestion = (question)=>{
        setInput(question);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[500px] flex-col rounded-xl border border-border bg-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 border-b border-border p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-primary/20 p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            className: "h-5 w-5 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-card-foreground",
                                children: "AI Asisten Desa"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Powered by LLM + Village Data Hub"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-1 rounded-full bg-success/20 px-2 py-0.5 text-xs text-success",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-success"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            "Online"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: [
                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-3", message.role === "user" && "flex-row-reverse"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", message.role === "assistant" ? "bg-primary/20" : "bg-secondary"),
                                    children: message.role === "assistant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-4 w-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[80%] rounded-xl px-4 py-3", message.role === "assistant" ? "bg-secondary text-card-foreground" : "bg-primary text-primary-foreground"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "whitespace-pre-wrap text-sm",
                                        children: message.content
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, message.id, true, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)),
                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-secondary px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.4s]"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border px-4 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 overflow-x-auto pb-2",
                    children: sampleQuestions.map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleQuickQuestion(question),
                            className: "shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-card-foreground",
                            children: question
                        }, question, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-border p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>{
                        e.preventDefault();
                        handleSend();
                    },
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            placeholder: "Tanyakan tentang data desa...",
                            className: "flex-1 bg-secondary"
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            size: "icon",
                            disabled: !input.trim() || isTyping,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(AIAssistantPanel, "in1GAClQL0GdLygzrBYozMmXfGM=");
_c = AIAssistantPanel;
var _c;
__turbopack_context__.k.register(_c, "AIAssistantPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/dna-desa-ai-presisi/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dna-desa-ai-presisi/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/stats-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$village$2d$dna$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/village-dna-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/analytics-charts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$recommendation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/recommendation-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$data$2d$hub$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/data-hub-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$ai$2d$assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/dashboard/ai-assistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/dna-desa-ai-presisi/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
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
;
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-64 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "Dashboard AI Desa"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-muted-foreground",
                                        children: "Platform analitik untuk pemetaan DNA Desa, diagnostik potensi, dan perencanaan pembangunan presisi"
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Total Desa Terpetakan",
                                        value: "83,721",
                                        change: 12.5,
                                        changeLabel: "dari bulan lalu",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Penduduk Tercakup",
                                        value: "45.2 Juta",
                                        change: 8.3,
                                        changeLabel: "dari bulan lalu",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-5 w-5 text-chart-2"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Produksi Total",
                                        value: "2.8 Juta Ton",
                                        change: 15.7,
                                        changeLabel: "dari bulan lalu",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-5 w-5 text-success"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$stats$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCard"], {
                                        title: "Data Terintegrasi",
                                        value: "2.6 Juta",
                                        change: -2.3,
                                        changeLabel: "records pending",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                            className: "h-5 w-5 text-warning"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                defaultValue: "overview",
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                        className: "bg-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "overview",
                                                className: "gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Overview"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "dna-desa",
                                                className: "gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    "DNA Desa"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "analytics",
                                                className: "gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Analytics"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "recommendations",
                                                className: "gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Rekomendasi"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "overview",
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductionTrendChart"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VillageTypeChart"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$recommendation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertsPanel"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$data$2d$hub$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataHubPanel"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegionalPerformanceChart"], {}, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$ai$2d$assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAssistantPanel"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "dna-desa",
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl font-semibold text-foreground",
                                                                children: "Profil DNA Desa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Klasifikasi dan profiling desa berdasarkan potensi, risiko, dan karakteristik"
                                                            }, void 0, false, {
                                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Semua Provinsi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Jawa Barat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Jawa Tengah"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Jawa Timur"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Semua Tipe"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Pertanian"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Perikanan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Wisata"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "Logistik"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$village$2d$dna$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleVillages"].map((village)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$village$2d$dna$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VillageDNACard"], {
                                                        village: village
                                                    }, village.id, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 md:grid-cols-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-border bg-card p-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-success/20 p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                        className: "h-5 w-5 text-success"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-card-foreground",
                                                                            children: "45%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Desa Pertanian"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-border bg-card p-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-info/20 p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                        className: "h-5 w-5 text-info"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-card-foreground",
                                                                            children: "78"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Skor Rata-rata"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-border bg-card p-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-warning/20 p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                        className: "h-5 w-5 text-warning"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-card-foreground",
                                                                            children: "1,250"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Desa Prioritas"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-border bg-card p-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg bg-chart-2/20 p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                                        className: "h-5 w-5 text-chart-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-card-foreground",
                                                                            children: "98%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Akurasi Klasifikasi"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "analytics",
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductionTrendChart"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegionalPerformanceChart"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$analytics$2d$charts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VillageTypeChart"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$data$2d$hub$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataHubPanel"], {}, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "recommendations",
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-6 lg:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$recommendation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecommendationPanel"], {}, void 0, false, {
                                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$ai$2d$assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAssistantPanel"], {}, void 0, false, {
                                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$components$2f$dashboard$2f$recommendation$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertsPanel"], {}, void 0, false, {
                                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "border-t border-border px-6 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "© 2024 AI Desa Framework - Kementerian Desa, PDT, dan Transmigrasi"
                                }, void 0, false, {
                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Versi 1.0.0"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dna$2d$desa$2d$ai$2d$presisi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Data terakhir diperbarui: 7 Maret 2026"
                                        }, void 0, false, {
                                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dna-desa-ai-presisi/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dna-desa-ai-presisi_8d6e4f01._.js.map