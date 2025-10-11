(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    'use strict';

    /* *** FIX: Google Fonts and base styles are now loaded inside the component's template. */
    const componentTemplate = document.createElement('template');
    componentTemplate.innerHTML = `
        <link rel="stylesheet" href="output.css">
        <style>
            
        </style>
        
        <div id="app-container" class="dark bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 antialiased font-['Poppins'] m-0 p-0">
            <div id="app" class="flex h-screen w-full flex-col overflow-hidden">
                <header class="flex h-16 shrink-0 items-center justify-between borders-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 md:px-4 z-50">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><g fill="none"><path fill="url(#SVGT7uX3cDG)" d="M5.25 4A3.25 3.25 0 0 0 2 7.25V20h.525c.092.933.441 1.79.975 2.5V25h23.25A3.25 3.25 0 0 0 30 21.75V7.25A3.25 3.25 0 0 0 26.75 4z"/><path fill="url(#SVGzm6hyd4I)" fill-opacity="0.9" d="M8 11a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m9 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"/><path fill="url(#SVGvQsnyeMK)" d="M12 21.862A6.97 6.97 0 0 1 7.5 23.5A6.97 6.97 0 0 1 3 21.862V29a1 1 0 0 0 1.528.849l2.972-1.85l2.972 1.85a1 1 0 0 0 1.528-.85z"/><path fill="url(#SVG6fUzRbkW)" d="M13 19.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"/><defs><radialGradient id="SVGvQsnyeMK" cx="0" cy="0" r="1" gradientTransform="matrix(0 11.421 -17.6871 0 7.5 22)" gradientUnits="userSpaceOnUse"><stop stop-color="#163697"/><stop offset="1" stop-color="#29c3ff"/></radialGradient><radialGradient id="SVG6fUzRbkW" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 11.86 -32.457)scale(61.3992 52.5856)" gradientUnits="userSpaceOnUse"><stop offset=".772" stop-color="#ffcd0f"/><stop offset=".991" stop-color="#e67505"/></radialGradient><linearGradient id="SVGT7uX3cDG" x1="3" x2="16.766" y1="7.938" y2="27.007" gradientUnits="userSpaceOnUse"><stop stop-color="#0fafff"/><stop offset="1" stop-color="#2764e7"/></linearGradient><linearGradient id="SVGzm6hyd4I" x1="31.2" x2="20.404" y1="30.7" y2="1.771" gradientUnits="userSpaceOnUse"><stop stop-color="#9deaff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></g></svg>
                        <a href="#" title="ValidSertifikat" onclick="return false;"><h1 class="hidden md:inline text-base md:text-lg font-semibold">ValidSertifikat</h1><h1 class="md:hidden text-base md:text-lg font-semibold">VS</h1></a>
                    </div>
                    <div class="flex items-center gap-2 md:gap-5">
                        <div class="flex items-center borders-r border-slate-200 dark:border-slate-700 pr-2 gap-2">
                            <button id="undo-btn" class="p-2 rounded-md text-slate-400 disabled:text-slate-300 dark:disabled:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:cursor-not-allowed" disabled title="Undo (Ctrl+Z)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 64c-56.8 0-107.9 24.7-143.1 64H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0s32 14.3 32 32v54.7C110.9 33.6 179.5 0 256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7c-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3c106 0 192-86 192-192S362 64 256 64"/></svg>
                            </button>
                            <button id="redo-btn" class="p-2 rounded-md text-slate-400 disabled:text-slate-300 dark:disabled:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:cursor-not-allowed" disabled title="Redo (Ctrl+Y)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M436.7 74.7L448 85.4V32c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h47.9l-7.6-7.2l-.6-.6c-75-75-196.5-75-271.5 0s-75 196.5 0 271.5s196.5 75 271.5 0q12.3-12.3 21.9-26.1c10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7c-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3"/></svg>
                            </button>
                        </div>
                        <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </button>
                        <div class="relative inline-block text-left">
                            <button id="download-zip-btn" type="button" class="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50" aria-expanded="false" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" x2="12" y1="15" y2="3"/>
                                </svg>
                                <span class="hidden sm:inline">Download Semua</span>
                            </button>
                            <div id="download-format" class="absolute right-0 top-full w-auto z-10 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black dark:ring-slate-700 ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="download-zip-btn" tabindex="-1">
                                <div class="py-1 w-fit" role="none">
                                    <button class="download-format text-gray-700 dark:text-slate-300 block px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-700 whitespace-nowrap" role="menuitem" data-format="png">
                                        Format PNG
                                    </button>
                                    <button class="download-format text-gray-700 dark:text-slate-300 block px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-700 whitespace-nowrap" role="menuitem" data-format="jpeg">
                                        Format JPG
                                    </button>
                                    <button class="download-format text-gray-700 dark:text-slate-300 block px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-slate-700 whitespace-nowrap" role="menuitem" data-format="pdf">
                                        Format PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button id="sidebar-toggle" class="md:hidden p-2 rounded-md border-slate-300 dark:border-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        </button>
                    </div>
                </header>   

                <div class="flex flex-1 overflow-hidden">
                    <aside id="sidebar" class="hidden absolute md:relative md:flex w-66 flex-col borders-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full z-20 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
                        <div class="flex h-14 items-center justify-between borders-b border-slate-200 dark:border-slate-700 px-4">
                            <h2 class="font-semibold">Tools Panel</h2>
                        </div>
                        <div class="flex-1 overflow-y-auto p-4 space-y-4">
                            <div class="space-y-2">
                                <h3 class="font-medium text-sm">Ukuran Kanvas</h3>
                                <div class="flex items-center gap-2">
                                    <label for="canvas-width" class="text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12H2m20 0l-4 4m4-4l-4-4M2 12l4 4m-4-4l4-4"/></svg></label>
                                    <input type="number" id="canvas-width" value="1280" class="h-8 w-16 lg:w-20 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                    <label for="canvas-height" class="text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22V2m0 20l-4-4m4 4l4-4M12 2L8 6m4-4l4 4"/></svg></label>
                                    <input type="number" id="canvas-height" value="720" class="h-8 w-16 lg:w-20 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                </div>
                            </div>
                            <div class="space-y-2">
                                <h3 class="font-medium text-sm">Desain Template (Background)</h3>
                                <label class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 p-4 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="M22 4v16H2V4z"/><path d="M18 4h-4v5.5L16 8l2 1.5z"/><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 12h4m-4 4h12M14 4h4v5.5L16 8l-2 1.5z"/><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M22 4v16H2V4z"/></g></svg>
                                    <span>Upload Desain Sertifikat</span>
                                    <input type="file" id="bg-uploader" class="hidden" accept="image/*">
                                </label>
                            </div>

                            <div class="space-y-2">
                                <h3 class="font-medium text-sm">Elemen</h3>
                                <div class="grid grid-cols-2 gap-2">
                                    <button id="add-text" class="flex flex-col items-center gap-1 rounded-md borders border-slate-300 dark:border-slate-600 p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7V4h-6v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H5v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0"/></svg>
                                        <span class="text-xs">Teks</span>
                                    </button>
                                     <button id="add-rect" class="flex flex-col items-center gap-1 rounded-md borders border-slate-300 dark:border-slate-600 p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                                        <span class="text-xs">Kotak</span>
                                    </button>
                                    <label class="flex flex-col items-center gap-1 rounded-md borders border-slate-300 dark:border-slate-600 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M448 80c8.8 0 16 7.2 16 16v319.8l-5-6.5l-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3l-83 107.4l-30.5-42.7c-4.5-6.3-11.7-10-19.5-10s-15 3.7-19.5 10.1l-80 112l-4.5 6.2V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 192a48 48 0 1 0 0-96a48 48 0 1 0 0 96"/></svg>
                                        <span class="text-xs">Gambar</span>
                                        <input type="file" id="image-uploader" class="hidden" accept="image/*">
                                    </label>
                                    <button id="add-qrcode" class="flex flex-col items-center gap-1 rounded-md borders border-slate-300 dark:border-slate-600 p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"/><rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"/><rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"/><rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"/><rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"/><rect width="80" height="80" x="336" y="96" fill="currentColor" rx="8" ry="8"/><rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"/><rect width="80" height="80" x="96" y="96" fill="currentColor" rx="8" ry="8"/><rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"/><rect width="80" height="80" x="96" y="336" fill="currentColor" rx="8" ry="8"/><rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"/></svg>
                                        <span class="text-xs">QR Code</span>
                                    </button>
                                </div>
                            </div>
                             <div class="space-y-2">
                                <h3 class="font-medium text-sm">Data Peserta</h3>
                                <label class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 p-4 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m15 15-3-3-3 3"/></svg>
                                    <span>Upload Excel/CSV</span>
                                    <input type="file" id="data-uploader" class="hidden" accept=".xlsx, .xls, .csv">
                                </label>
                                <div id="data-mapping-container" class="space-y-2 hidden">
                                    <p class="text-xs font-medium text-slate-600 dark:text-slate-400">Hubungkan Data ke Elemen:</p>
                                    <div id="data-mapping-ui" class="space-y-2 text-sm">
                                        <p class="text-xs text-slate-500 dark:text-slate-400">Pilih elemen di kanvas untuk dihubungkan dengan kolom data.</p>
                                    </div>
                                </div>
                            </div>
                             <div class="space-y-2">
                                <h3 class="font-medium text-sm">Custom Font</h3>
                                <label class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 p-4 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M10.4 12.6c.2-.4.5-.8.9-1s.8-.4 1.3-.5c.5-.1 1-.1 1.4.1s.8.4 1.1.8c.3.4.5.8.5 1.3s-.1 1-.4 1.4c-.3.4-.7.7-1.1.9s-.9.3-1.4.3c-.5 0-1-.1-1.4-.3s-.8-.4-1.1-.7c-.3-.3-.5-.7-.6-1.1H8.9c.1.9.4 1.7.9 2.3s1.2 1 2 1.3c.8.3 1.6.4 2.5.2s1.7-.6 2.4-1.2c.7-.6 1.1-1.4 1.3-2.3s.1-1.8-.4-2.7c-.5-.8-1.2-1.5-2-1.9s-1.7-.7-2.6-.5c-1 .1-1.9.5-2.6 1.1s-1.3 1.4-1.6 2.3H13v-1Z"/></svg>
                                    <span>Upload Font (.ttf, .otf)</span>
                                    <input type="file" id="font-uploader" class="hidden" accept=".ttf, .otf, .woff, .woff2">
                                </label>
                            </div>
                        </div>
                    </aside>
                    
                    <main id="main-canvas" class="flex-1 flex items-center justify-center bg-dots overflow-scroll relative p-4 md:p-8">
                        <div id="contextual-toolbar" class="w-full absolute top-0 left-0 z-10 hidden items-center justify-center">
                            <div class="w-fit flex flex-row items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-800 borders border-slate-200 dark:border-slate-700 p-2 shadow-lg flex-wrap">
                                <div id="text-options" class="hidden items-center justify-center gap-1 flex-wrap p-1">
                                    <select id="font-family-select" class="h-8 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm"></select>
                                    <input type="number" id="font-size-input" class="h-8 w-16 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm" value="40">
                                    <input type="color" id="font-color-picker" class="h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 p-1 cursor-pointer bg-white dark:bg-slate-700" title="Warna Teks">
                                    <button id="font-bold-btn" class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold" title="Bold">B</button>
                                    <button id="font-italic-btn" class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 italic" title="Italic">I</button>
                                </div>

                                <div id="general-options" class="hidden items-center justify-center gap-1 flex-wrap p-1">
                                    <input type="color" id="fill-color-picker" class="h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 p-1 cursor-pointer bg-white dark:bg-slate-700" title="Warna Isi">
                                    <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700" data-action="copy" title="Copy (Ctrl+C)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.25 2.25 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123M17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75"/></svg>
                                    </button>
                                    <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50" data-action="paste" title="Paste (Ctrl+V)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.753 2c1.158 0 2.111.875 2.234 2h1.763a2.25 2.25 0 0 1 2.245 2.096L19 6.25a.75.75 0 0 1-.647.742L18.249 7a.75.75 0 0 1-.742-.647L17.5 6.25a.75.75 0 0 0-.648-.743L16.75 5.5h-2.132a2.24 2.24 0 0 1-1.865.993H9.247a2.24 2.24 0 0 1-1.865-.992L5.25 5.5a.75.75 0 0 0-.743.648L4.5 6.25v13.505c0 .38.282.693.648.743l.102.007h3a.75.75 0 0 1 .743.647l.007.102a.75.75 0 0 1-.75.75h-3a2.25 2.25 0 0 1-2.245-2.095L3 19.755V6.25a2.25 2.25 0 0 1 2.096-2.245L5.25 4h1.763a2.247 2.247 0 0 1 2.234-2zm5.997 6a2.25 2.25 0 0 1 2.245 2.096l.005.154v9.5a2.25 2.25 0 0 1-2.096 2.245L18.75 22h-6.5a2.25 2.25 0 0 1-2.245-2.096L10 19.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L12.25 8zm0 1.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v9.5c0 .38.282.694.648.743l.102.007h6.5a.75.75 0 0 0 .743-.648l.007-.102v-9.5a.75.75 0 0 0-.648-.743zm-5.997-6H9.247a.747.747 0 0 0 0 1.493h3.506a.747.747 0 1 0 0-1.493"/></svg>
                                    </button>
                                    <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700" data-action="duplicate" title="Duplicate (Ctrl+D)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><rect width="336" height="336" x="128" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24m168-168v160m80-80H216"/></svg></button>
                                    <div class="relative group flex justify-center items-center" data-submenu-container>
                                        <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700" title="Layer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.026 12.192a2 2 0 0 1-.577.598l-6.05 4.084a2.5 2.5 0 0 1-2.798 0l-6.05-4.084a2 2 0 0 1-.779-2.29l6.841 4.56a2.5 2.5 0 0 0 2.613.098l.16-.098l6.841-4.56a2 2 0 0 1-.201 1.692m.201 1.558a1.996 1.996 0 0 1-.778 2.29l-6.05 4.084a2.5 2.5 0 0 1-2.798 0l-6.05-4.084a2 2 0 0 1-.779-2.29l6.841 4.56a2.5 2.5 0 0 0 2.613.098l.16-.098zm-6.84-10.325l6.365 4.243a1 1 0 0 1 0 1.664l-6.365 4.244a2.5 2.5 0 0 1-2.774 0L4.248 9.332a1 1 0 0 1 0-1.664l6.365-4.243a2.5 2.5 0 0 1 2.774 0M11.56 4.606l-.116.067L5.705 8.5l5.74 3.828a1 1 0 0 0 .994.066l.116-.066L18.294 8.5l-5.74-3.827a1 1 0 0 0-.993-.067"/></svg>
                                        </button>
                                        <div class="group-hover:flex hidden flex-row items-center justify-center absolute top-full bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 p-1 z-10">
                                            <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="bring-to-front" title="Bring to front"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m16.978 8l2.31 1.06C21.095 9.892 22 10.308 22 11s-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.271-2.394-.813l-4.893-2.248C2.904 12.11 2 11.693 2 11s.904-1.109 2.713-1.94L7.022 8M12 2.5V10m3-5c-.59-.607-2.16-3-3-3S9.59 4.393 9 5"/><path d="M20.233 15.5C21.41 16.062 22 16.44 22 17c0 .693-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.27-2.394-.813L4.713 18.94C2.904 18.11 2 17.694 2 17c0-.56.59-.938 1.767-1.5"/></g></svg>
                                            </button>
                                            <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="bring-forward" title="Bring forward"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.89 11.5l3.397 1.56C21.096 13.892 22 14.308 22 15s-.904 1.109-2.713 1.94l-4.893 2.247c-1.18.542-1.77.813-2.394.813s-1.214-.271-2.394-.813l-4.893-2.248C2.904 16.11 2 15.693 2 15s.904-1.109 2.713-1.94L8.11 11.5m3.89-7V15m3-8c-.59-.607-2.16-3-3-3S9.59 6.393 9 7"/></svg>
                                            </button>
                                            <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="send-backward"title="Send backward"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.89 12.5l3.397-1.56C21.096 10.108 22 9.692 22 9s-.904-1.109-2.713-1.94l-4.893-2.247C13.214 4.271 12.624 4 12 4s-1.214.271-2.394.813L4.713 7.061C2.904 7.89 2 8.307 2 9s.904 1.109 2.713 1.94L8.11 12.5m3.89 7V9m3 8c-.59.607-2.16 3-3 3s-2.41-2.393-3-3"/></svg>
                                            </button>
                                            <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="send-to-back"title="Send to back"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.5V7m3 12c-.59.607-2.16 3-3 3s-2.41-2.393-3-3m11.233-7.5C21.41 12.062 22 12.44 22 13c0 .693-.904 1.109-2.713 1.94L15.89 16.5m-12.123-5C2.59 12.062 2 12.44 2 13c0 .693.904 1.109 2.713 1.94L8.11 16.5m0-6L4.713 8.94C2.904 8.108 2 7.692 2 7s.904-1.109 2.713-1.94l4.893-2.247C10.786 2.271 11.376 2 12 2s1.214.271 2.394.813l4.893 2.248C21.096 5.89 22 6.307 22 7s-.904 1.109-2.713 1.94L15.89 10.5"/></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="relative group flex justify-center items-center" data-submenu-container>
                                        <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700" title="Align"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 2v2H2V2h20M2 10h11V6H2v4m13 0h7V6h-7v4m-2 12h11v-4H2v4M2 16h7v-4H2v4m9 0h11v-4H11v4Z"/></svg></button>
                                        <div class="group-hover:block hidden flex-col items-center justify-center absolute top-full bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 p-1 z-10">
                                            <div class="flex flex-row items-center justify-center">
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-left" title="Align Left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0zM8.25 4A2.25 2.25 0 0 0 6 6.25v2.5A2.25 2.25 0 0 0 8.25 11h10.5A2.25 2.25 0 0 0 21 8.75v-2.5A2.25 2.25 0 0 0 18.75 4zM7.5 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75zM8.25 13A2.25 2.25 0 0 0 6 15.25v2.5A2.25 2.25 0 0 0 8.25 20h7a2.25 2.25 0 0 0 2.25-2.25v-2.5A2.25 2.25 0 0 0 15.25 13zm-.75 2.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"/></svg></button>
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-center" title="Align Center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 21.25V20h-2.5a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 8.75 13h2.5v-2h-4.5A2.25 2.25 0 0 1 4.5 8.75v-2.5A2.25 2.25 0 0 1 6.75 4h4.5V2.75a.75.75 0 0 1 1.5 0V4h4.5a2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 17.25 11h-4.5v2h2.5a2.25 2.25 0 0 1 2.25 2.25v2.5A2.25 2.25 0 0 1 15.25 20h-2.5v1.25a.75.75 0 0 1-1.5 0m4-2.75a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75zm2-9a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75z"/></svg></button>
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-right" title="Align Right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM15.75 4A2.25 2.25 0 0 1 18 6.25v2.5A2.25 2.25 0 0 1 15.75 11H5.25A2.25 2.25 0 0 1 3 8.75v-2.5A2.25 2.25 0 0 1 5.25 4zm.75 2.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75zM15.75 13A2.25 2.25 0 0 1 18 15.25v2.5A2.25 2.25 0 0 1 15.75 20h-7a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 8.75 13zm.75 2.25a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75z"/></svg></button>
                                            </div>
                                            <div class="flex flex-row items-center justify-center">
                                            
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-top" title="Align Top"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM4 8.25A2.25 2.25 0 0 1 6.25 6h2.5A2.25 2.25 0 0 1 11 8.25v10.5A2.25 2.25 0 0 1 8.75 21h-2.5A2.25 2.25 0 0 1 4 18.75zm2.25-.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-.75-.75zm6.75.75A2.25 2.25 0 0 1 15.25 6h2.5A2.25 2.25 0 0 1 20 8.25v7a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 13 15.25zm2.25-.75a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75z"/></svg></button>
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-middle" title="Align Middle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 12h-3m13.5 0h-4.5m13.5 0h-3M9.75 3.25v17.5s0 1-1 1h-4s-1 0-1-1V3.25s0-1 1-1h4s1 0 1 1m10.5 3v11.5s0 1-1 1h-4s-1 0-1-1V6.25s0-1 1-1h4s1 0 1 1"/></svg></button>
                                                <button class="w-full text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700" data-action="align-bottom" title="Align Bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.75 21a.75.75 0 0 1 0-1.5h18.5a.75.75 0 0 1 0 1.5zM4 15.75A2.25 2.25 0 0 0 6.25 18h2.5A2.25 2.25 0 0 0 11 15.75V5.25A2.25 2.25 0 0 0 8.75 3h-2.5A2.25 2.25 0 0 0 4 5.25zm2.25.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75zm6.75-.75A2.25 2.25 0 0 0 15.25 18h2.5A2.25 2.25 0 0 0 20 15.75v-7a2.25 2.25 0 0 0-2.25-2.25h-2.5A2.25 2.25 0 0 0 13 8.75zm2.25.75a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75z"/></svg></button>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="h-6 w-px bg-slate-200 dark:bg-slate-600 mx-1"></div>
                                    
                                    <button class="flex items-center justify-center h-8 w-8 rounded-md border border-slate-300 text-red-500 dark:border-slate-600 hover:bg-red-50 dark:hover:bg-red-500/10" data-action="delete" title="Delete"><svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                                </div>
                            </div>
                        </div>

                        <div id="canvas-container" class="bg-white dark:bg-slate-950 shadow-lg">
                            <canvas id="certificate-canvas"></canvas>
                        </div>
                    </main>


                    <div id="zoom-controls" class="absolute bottom-4 right-4 z-10 flex items-center gap-1 rounded-lg bg-white dark:bg-slate-800 borders border-slate-200 dark:border-slate-700 p-2 shadow-lg">
                        <button id="zoom-out-btn" class="h-8 w-8 rounded-md borders border-slate-300 dark:border-slate-600 p-1 hover:bg-slate-100 dark:hover:bg-slate-700">-</button>
                        <button id="fit-to-screen-btn" class="h-8 rounded-md borders border-slate-300 dark:border-slate-600 px-3 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span id="zoom-level-text">100%</span>
                        </button>
                        <button id="zoom-in-btn" class="h-8 w-8 rounded-md borders border-slate-300 dark:border-slate-600 p-1 hover:bg-slate-100 dark:hover:bg-slate-700">+</button>
                    </div>
                </div>
            </div>
            
            <div id="loading-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center">
                <div class="bg-white dark:bg-slate-800 rounded-lg p-8 flex flex-col items-center gap-4">
                    <svg class="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p id="loading-text" class="font-medium">Memproses...</p>
                </div>
            </div>

            <div id="qrcode-modal" class="hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-75 items-center justify-center p-4">
                <div class="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-h-[90vh] flex flex-col">
                    <div class="p-4 borders-b border-slate-200 dark:border-slate-700 flex justify-between items-center shrink-0">
                        <h2 class="text-lg font-semibold">Pengaturan Kustomisasi QR Code</h2>
                        <button id="close-qrcode-modal" class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
                        <div class="space-y-4 lg:col-span-2">
                            <h3 class="text-base font-semibold borders-b border-slate-200 dark:border-slate-700 pb-2">Sumber Data</h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Pilih kolom yang akan digabung dan dienkripsi menjadi QR Code. Urutan penting.</p>
                            <div id="qrcode-columns-container" class="space-y-2"></div>
                            <button id="add-qrcode-column" class="text-sm text-indigo-600 hover:underline">+ Tambah Kolom</button>
                            <div class="space-y-1">
                                <label for="validation-url" class="text-sm font-medium">URL Validasi (sebelum kode)</label>
                                <input type="text" id="validation-url" placeholder="https://domain.com/cek/?kode=" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700  px-2 text-sm">
                            </div>
                        </div>

                        <div class="space-y-4">
                            <h3 class="text-base font-semibold borders-b border-slate-200 dark:border-slate-700 pb-2">Titik (Dots)</h3>
                            <div>
                                <label for="qr-dots-type" class="block text-sm font-medium">Gaya Titik</label>
                                <select id="qr-dots-type" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                    <option value="rounded">Rounded</option>
                                    <option value="dots">Dots</option>
                                    <option value="classy">Classy</option>
                                    <option value="classy-rounded">Classy Rounded</option>
                                    <option value="square">Square</option>
                                    <option value="extra-rounded" selected>Extra Rounded</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium">Tipe Warna Titik</label>
                                <div class="flex gap-4 mt-1 text-sm">
                                    <label class="flex items-center gap-2"><input type="radio" name="dots-color-type" value="single" checked class="text-indigo-600 focus:ring-indigo-500"> Single</label>
                                    <label class="flex items-center gap-2"><input type="radio" name="dots-color-type" value="gradient" class="text-indigo-600 focus:ring-indigo-500"> Gradient</label>
                                </div>
                            </div>
                            <div class="dots-single-color-fields">
                                <label for="qr-dots-color" class="block text-sm font-medium">Warna</label>
                                <input type="color" id="qr-dots-color" value="#000000" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                            </div>
                            <div class="dots-gradient-fields space-y-2 hidden">
                                <label class="block text-sm font-medium">Warna Gradien</label>
                                <div class="flex gap-2">
                                    <input type="color" id="qr-dots-gradient-color1" value="#000000" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                                    <input type="color" id="qr-dots-gradient-color2" value="#999999" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                                </div>
                                <label for="qr-dots-gradient-rotation" class="block text-sm font-medium">Rotasi Gradien</label>
                                <input type="range" id="qr-dots-gradient-rotation" value="0" min="0" max="360" class="w-full">
                            </div>
                        </div>

                        <div class="space-y-4">
                            <h3 class="text-base font-semibold borders-b border-slate-200 dark:border-slate-700 pb-2">Sudut (Corners)</h3>
                            <div>
                                <label for="qr-corners-square-type" class="block text-sm font-medium">Gaya Kotak Sudut</label>
                                <select id="qr-corners-square-type" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                    <option value="extra-rounded" selected>Extra Rounded</option>
                                    <option value="dot">Dot</option>
                                    <option value="square">Square</option>
                                </select>
                            </div>
                            <div>
                                <label for="qr-corners-square-color" class="block text-sm font-medium">Warna Kotak Sudut</label>
                                <input type="color" id="qr-corners-square-color" value="#000000" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                            </div>
                            <div>
                                <label for="qr-corners-dot-type" class="block text-sm font-medium">Gaya Titik Sudut</label>
                                <select id="qr-corners-dot-type" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                    <option value="dot">Dot</option>
                                    <option value="square">Square</option>
                                </select>
                            </div>
                            <div>
                                <label for="qr-corners-dot-color" class="block text-sm font-medium">Warna Titik Sudut</label>
                                <input type="color" id="qr-corners-dot-color" value="#000000" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <h3 class="text-base font-semibold borders-b border-slate-200 dark:border-slate-700 pb-2">Latar & Logo</h3>
                            <div>
                                <label for="qr-bg-color" class="block text-sm font-medium">Warna Latar</label>
                                <input type="color" id="qr-bg-color" value="#ffffff" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-700">
                            </div>
                            <div class="flex items-center gap-4">
                                <label for="logoUploader" class="text-sm p-2 borders border-slate-300 dark:border-slate-600 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700">Pilih Logo...</label>
                                <input type="file" id="logoUploader" class="hidden" accept="image/png, image/jpeg, image/svg+xml">
                                <div id="logo-preview-container" class="flex items-center gap-2">
                                    <img id="logo-preview" src="" class="h-10 w-10 object-contain hidden bg-gray-100 dark:bg-slate-700 rounded">
                                    <button id="remove-logo" class="hidden text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                                </div>
                            </div>
                            <div>
                                <label for="qr-image-margin" class="block text-sm font-medium">Margin Logo</label>
                                <input type="number" id="qr-image-margin" value="4" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                            </div>
                        </div>

                        <div class="space-y-4">
                            <h3 class="text-base font-semibold borders-b border-slate-200 dark:border-slate-700 pb-2">Opsi Teknis</h3>
                            <div>
                                <label for="qr-error-correction-level" class="block text-sm font-medium">Level Koreksi Error</label>
                                <select id="qr-error-correction-level" class="w-full h-9 rounded-md borders border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-2 text-sm">
                                    <option value="L">Low</option>
                                    <option value="M">Medium</option>
                                    <option value="Q">Quartile</option>
                                    <option value="H" selected>High</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 borders-t border-slate-200 dark:border-slate-700 flex justify-end shrink-0">
                        <button id="save-qrcode-btn" class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">Simpan & Tambah ke Kanvas</button>
                    </div>
                </div>
            </div>
            <div id="context-menu" class="hidden absolute z-50">
                <div
                    class="hidden md:flex flex-col w-64 bg-slate-800 text-slate-200 rounded-md shadow-lg text-sm p-1">
                    <div class="flex flex-col" data-menu-section="clipboard">
                        <button data-action="copy"><span>Copy</span><span class="shortcut">Ctrl+C</span></button>
                        <button data-action="paste"><span>Paste</span><span class="shortcut">Ctrl+V</span></button>
                        <button data-action="duplicate"><span>Duplicate</span><span class="shortcut">Ctrl+D</span></button>
                        <button data-action="delete"><span>Delete</span><span class="shortcut">Delete</span></button>
                    </div>
                    <div class="separator"></div>
                    <div class="flex flex-col" data-menu-section="layer">
                        <div class="submenu-container group">
                            <button><span>Layer</span><span class="shortcut text-xl leading-none">›</span></button>
                            <div class="submenu group-hover:block m-0">
                                <button data-action="bring-forward"><span>Bring forward</span></button>
                                <button data-action="bring-to-front"><span>Bring to front</span></button>
                                <button data-action="send-backward"><span>Send backward</span></button>
                                <button data-action="send-to-back"><span>Send to back</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="separator"></div>
                    <div class="flex flex-col" data-menu-section="align">
                        <div class="submenu-container group">
                            <button><span>Align to page</span><span class="shortcut text-xl leading-none">›</span></button>
                            <div class="submenu group-hover:block m-0">
                                <button data-action="align-left"><span>Left</span></button>
                                <button data-action="align-center"><span>Center</span></button>
                                <button data-action="align-right"><span>Right</span></button>
                                <div class="separator"></div>
                                <button data-action="align-top"><span>Top</span></button>
                                <button data-action="align-middle"><span>Middle</span></button>
                                <button data-action="align-bottom"><span>Bottom</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex md:hidden bg-slate-800 rounded-md shadow-lg p-1 gap-1">
                    <button data-action="copy" title="Copy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 21H8V7h11m-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/></svg></button>
                    <button data-action="paste" title="Paste"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m7 18H5V4h2v3h10V4h2v16Z"/></svg></button>
                    <button data-action="duplicate" title="Duplicate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12v2H4v12h7v-2l4 3l-4 3v-2M20 5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11m0 2H9v12h11V7Z"/></svg></button>
                    <button data-action="delete" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/></svg></button>
                </div>
            </div>
        </div>
    `;

    class ValidSertifikat extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(componentTemplate.content.cloneNode(true));
        }

        connectedCallback() {
            /* Load libraries, then initialize the application logic */
            this.loadDependencies().then(() => {
                this.initializeApp();
            }).catch(error => {
                console.error("Failed to load dependencies for ValidSertifikat component:", error);
                this.shadowRoot.innerHTML = `<p style="color: red; font-family: sans-serif; padding: 1em;">Error: Could not load required libraries. Please check the network connection and try again.</p>`;
            });
        }

        loadDependencies() {
            // Check if a script has already been loaded to avoid duplicates
            if (window.VALIDSERTIFIKAT_LIBS_LOADED) {
                return Promise.resolve();
            }

            const urls = [
                "https://fonts.googleapis.com",
                "https://fonts.gstatic.com",
                "https://cdn.jsdelivr.net"
            ];

            urls.forEach(url => {
                const linkTag = document.createElement('link');
                linkTag.rel = "preconnect";
                linkTag.href = url;
                linkTag.crossOrigin = true; 
                document.head.appendChild(linkTag);
            });

            document.head.appendChild(Object.assign(document.createElement('link'), {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
            }));
            
            const scripts = [
                { name: 'axios', src: 'https://cdn.jsdelivr.net/npm/axios@1.12.2/dist/axios.min.js' },
                { name: 'QRCodeStyling', src: 'https://cdn.jsdelivr.net/npm/qr-code-styling@1.9.2/lib/qr-code-styling.min.js' },
                { name: 'JSZip', src: 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js' },
                { name: 'fabric', src: 'https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js' },
                { name: 'XLSX', src: 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js' },
                { name: 'Papa', src: 'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js' },
                { name: 'jsPDF', src: 'https://cdn.jsdelivr.net/npm/jspdf@3.0.3/dist/jspdf.umd.min.js' }
                
            ];

            const promises = scripts.map(script => {
                return new Promise((resolve, reject) => {
                    // Check global scope if library is already there from another source
                    if (window[script.name]) { 
                        return resolve();
                    }
                    const scriptTag = document.createElement('script');
                    scriptTag.src = script.src;
                    scriptTag.onload = resolve;
                    scriptTag.onerror = reject;
                    document.head.appendChild(scriptTag);
                });
            });

            return Promise.all(promises).then(() => {
                window.VALIDSERTIFIKAT_LIBS_LOADED = true;
            });
        }

        initializeApp() {
            // *** FIX: Pass the shadowRoot to the main class constructor.
            // This is the key to fixing all selector and event listener issues.
            new CertificateEditorApp(this.shadowRoot, this);
        }
    }
    
    // *** FIX: The entire application logic is now inside this class.
    class CertificateEditorApp {
        // *** FIX: Constructor now accepts the shadowRoot and the host element.
        constructor(shadowRoot, hostElement) {
            this.root = shadowRoot; // The shadow DOM root
            this.host = hostElement; // The <validsertifikat-app> element
            this.canvas = null;
            this.zoom = 1;
            this.uploadedData = [];
            this.dataHeaders = [];
            this.fontCache = {};
            this.qrCodeConfig = {
                columns: [],
                validationUrl: '',
                styling: {}
            };
            this.history = [];
            this.historyIndex = -1;
            this.isRestoring = false;
            this._clipboard = null;

            // *** FIX: Helper functions now use the stored shadowRoot.
            this.$ = (selector) => this.root.querySelector(selector);
            this.$$ = (selector) => this.root.querySelectorAll(selector);
            document.querySelector('body').style.margin = "0px";
            document.querySelector('body').style.padding = "0px";
            document.querySelector('body').style.overflow = "clip";
            
            /* function addGlobalStyles() {
                const componentCssTemplate = document.createElement('style');
                componentCssTemplate.textContent = `
                `;
            // Pastikan document.head ada sebelum mencoba menambahkannya
                if (document.head) { 
                    document.head.appendChild(componentCssTemplate);
                } else {
                    console.error("document.head tidak ditemukan!");
                }
            }

            // 👈 Panggil fungsi ini!
            addGlobalStyles(); */
            
            this.init();
        }

        init() {
            this.initCanvas();
            this.initEventListeners();
            this.initContextMenu();
            this.updateFontDropdown();
            this.initPanAndZoom();
        }
        
        showLoading(text = "Memproses...") {
            this.$('#loading-text').textContent = text;
            this.$('#loading-modal').classList.remove('hidden');
            this.$('#loading-modal').classList.add('flex');
        };

        hideLoading() {
            this.$('#loading-modal').classList.add('hidden');
            this.$('#loading-modal').classList.remove('flex');
        };

        showAlert(message, type = 'info') {
            console.log(`ALERT (${type}):`, message);
            alert(message);
        };
        
        initCanvas() {
            const initialWidth = this.$('#canvas-width').value;
            const initialHeight = this.$('#canvas-height').value;
            
            this.canvas = new fabric.Canvas(this.$('#certificate-canvas'), {
                width: parseInt(initialWidth),
                height: parseInt(initialHeight),
                backgroundColor: '#ffffff',
                preserveObjectStacking: true
            });

            fabric.Object.prototype.transparentCorners = false;
            fabric.Object.prototype.cornerColor = '#4f46e5';
            fabric.Object.prototype.cornerStyle = 'circle';
            fabric.Object.prototype.borderColor = '#4f46e5';
            fabric.Object.prototype.borderScaleFactor = 1.5;

            this.canvas.on('object:modified', () => this.saveState());
            this.canvas.on('object:added', () => this.saveState());
            this.canvas.on('object:removed', () => this.saveState());

            this.canvas.on({
                'selection:created': (e) => e.selected && e.selected.length > 0 && this.updateContextualToolbar(e.selected[0]),
                'selection:updated': (e) => e.selected && e.selected.length > 0 && this.updateContextualToolbar(e.selected[0]),
                'selection:cleared': () => this.hideContextualToolbar(),
            });
            this.saveState();
        }
        
        saveState() {
            if (this.isRestoring) return;
            this.history = this.history.slice(0, this.historyIndex + 1);
            this.history.push(this.canvas.toJSON(['dataLink', 'isQrCode']));
            this.historyIndex = this.history.length - 1;
            this.updateUndoRedoButtons();
        }

        restoreState(index) {
            this.isRestoring = true;
            const state = this.history[index];
            this.canvas.loadFromJSON(state, () => {
                this.canvas.renderAll();
                this.isRestoring = false;
                this.updateUndoRedoButtons();
            });
        }
        
        undo() {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.restoreState(this.historyIndex);
            }
        }

        redo() {
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
                this.restoreState(this.historyIndex);
            }
        }

        updateUndoRedoButtons() {
            this.$('#undo-btn').disabled = this.historyIndex <= 0;
            this.$('#redo-btn').disabled = this.historyIndex >= this.history.length - 1;
        }

        initPanAndZoom() {
            const mainArea = this.$('main');
            const canvasContainer = this.$('#canvas-container');

            mainArea.addEventListener('wheel', (e) => {
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.01 : 0.01;
                const newZoom = this.zoom + delta;

                this.zoom = Math.max(0.1, Math.min(newZoom, 4)); // Clamp zoom level

                canvasContainer.style.transform = `scale(${this.zoom})`;
                this.updateZoomDisplay();
            });
            this.fitToScreen();
        }

        updateZoomDisplay() {
            this.$('#zoom-level-text').textContent = `${Math.round(this.zoom * 100)}%`;
        }

        setZoom(factor) {
            const canvasContainer = this.$('#canvas-container');
            const newZoom = this.zoom * factor;
            this.zoom = Math.max(0.1, Math.min(newZoom, 4)); // Clamp
            canvasContainer.style.transform = `scale(${this.zoom})`;
            this.updateZoomDisplay();
        }

        fitToScreen() {
            const mainArea = this.$('main');
            const canvasContainer = this.$('#canvas-container');
            const style = getComputedStyle(mainArea);
            const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

            const availableWidth = mainArea.clientWidth - paddingX;
            const availableHeight = mainArea.clientHeight - paddingY;
            const canvasWidth = this.canvas.getWidth();
            const canvasHeight = this.canvas.getHeight();

            const scale = Math.min(availableWidth / canvasWidth, availableHeight / canvasHeight);
            
            this.zoom = scale;
            canvasContainer.style.transform = `scale(${this.zoom})`;
            this.updateZoomDisplay();
        }

        initContextMenu() {
            const main = this.$('#main-canvas');
            const contextMenu = this.$('#context-menu');

            main.addEventListener('contextmenu', e => {
                // Deteksi sederhana untuk perangkat sentuh
                const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

                // Jika ini adalah perangkat sentuh, jangan tampilkan menu kustom kita.
                if (isTouchDevice) {
                    // Kita tidak memanggil e.preventDefault() agar browser bisa 
                    // menampilkan menu bawaannya (misal: "Save Image").
                    return;
                }

                // Jika ini bukan perangkat sentuh (desktop), baru jalankan logika menu kustom
                e.preventDefault();
                
                const target = this.canvas.findTarget(e, false);
                
                if (target) {
                    this.canvas.setActiveObject(target);
                } else {
                    this.canvas.discardActiveObject();
                }
                this.canvas.renderAll();
                
                this.updateContextMenuState();
                this.showContextMenu(e.clientX, e.clientY);
            });

            // Sembunyikan menu jika klik kiri di mana saja
            this.root.addEventListener('click', () => this.hideContextMenu());
            document.addEventListener('click', () => this.hideContextMenu());

            contextMenu.addEventListener('click', (e) => {
                const button = e.target.closest('button');
                if (button && button.dataset.action) {
                    e.stopPropagation();
                    this.handleMenuAction(button.dataset.action);
                    this.hideContextMenu();
                }
            });
        }

        showContextMenu(x, y) {
            const contextMenu = this.$('#context-menu');
            contextMenu.classList.remove('hidden');

            // Paksa browser me-render ulang untuk mendapatkan dimensi yang benar
            contextMenu.style.visibility = 'hidden';
            contextMenu.style.display = 'block';
            
            const hostRect = this.host.getBoundingClientRect();
            const menuWidth = contextMenu.offsetWidth;
            const menuHeight = contextMenu.offsetHeight;
            
            contextMenu.style.visibility = '';
            contextMenu.style.display = '';

            let top = y - hostRect.top;
            let left = x - hostRect.left;

            // Cek batas horizontal & vertikal untuk menu utama
            if (x + menuWidth > window.innerWidth) left -= menuWidth;
            if (y + menuHeight > window.innerHeight) top -= menuHeight;
            
            contextMenu.style.top = `${top}px`;
            contextMenu.style.left = `${left}px`;

            // Cek batas untuk setiap submenu
            contextMenu.querySelectorAll('.submenu-container').forEach(container => {
                container.classList.remove('submenu-open-left', 'submenu-open-right');
                const sub = container.querySelector('.submenu');
                if (!sub) return;
                
                const mainRect = container.getBoundingClientRect();
                
                // Logika penyesuaian posisi submenu
                if (mainRect.right + sub.offsetWidth > window.innerWidth) {
                    container.classList.add('submenu-open-left');
                } else {
                    container.classList.add('submenu-open-right');
                }
                // Anda juga bisa menambahkan logika untuk batas atas/bawah di sini jika perlu
            });
        }

        hideContextMenu() {
            this.$('#context-menu').classList.add('hidden');
        }

        updateContextMenuState() {
            const contextMenu = this.$('#context-menu');
            const activeObject = this.canvas.getActiveObject();
            
            // Nonaktifkan semua tombol yang butuh objek
            contextMenu.querySelectorAll('[data-menu-section] button').forEach(btn => btn.disabled = true);

            if (activeObject) {
                // Aktifkan tombol jika ada objek terpilih
                contextMenu.querySelectorAll('[data-menu-section] button').forEach(btn => btn.disabled = false);
            }
            
            // Selalu cek clipboard untuk tombol Paste
            if (this._clipboard) {
                contextMenu.querySelector('button[data-action="paste"]').disabled = false;
            }
        }

        handleMenuAction(action) {
            const activeObject = this.canvas.getActiveObject();
            if (!activeObject && !['paste'].includes(action)) return;

            switch (action) {
                case 'copy': this.copyObject(); break;
                case 'paste': this.pasteObject(); break;
                case 'duplicate': this.duplicateObject(); break;
                case 'delete': this.deleteObject(); break;
                case 'bring-forward': activeObject.bringForward(); break;
                case 'bring-to-front': activeObject.bringToFront(); break;
                case 'send-backward': activeObject.sendBackwards(); break;
                case 'send-to-back': activeObject.sendToBack(); break;
                case 'align-left': activeObject.set({ left: 0 }).setCoords(); break;
                case 'align-center': activeObject.centerH(); break;
                case 'align-right': activeObject.set({ left: this.canvas.width - activeObject.getScaledWidth() }).setCoords(); break;
                case 'align-top': activeObject.set({ top: 0 }).setCoords(); break;
                case 'align-middle': activeObject.centerV(); break;
                case 'align-bottom': activeObject.set({ top: this.canvas.height - activeObject.getScaledHeight() }).setCoords(); break;
            }
            this.canvas.renderAll();
            this.saveState();
        }

        copyObject() {
    const activeObject = this.canvas.getActiveObject();
    if (!activeObject) return;
    activeObject.clone((cloned) => {
        this._clipboard = cloned;
    });
        }

        pasteObject() {
            if (!this._clipboard) return;
            this._clipboard.clone((clonedObj) => {
                this.canvas.discardActiveObject();
                clonedObj.set({
                    left: (this._clipboard.left || 0) + 10,
                    top: (this._clipboard.top || 0) + 10,
                    evented: true,
                });
                
                if (clonedObj.type === 'activeSelection') {
                    clonedObj.canvas = this.canvas;
                    clonedObj.forEachObject((obj) => this.canvas.add(obj));
                    clonedObj.setCoords();
                } else {
                    this.canvas.add(clonedObj);
                }
                this._clipboard.top += 10;
                this._clipboard.left += 10;
                this.canvas.setActiveObject(clonedObj);
                this.canvas.requestRenderAll();
                this.saveState();
            });
        }

        duplicateObject() {
            const activeObject = this.canvas.getActiveObject();
            if (!activeObject) return;
            activeObject.clone((cloned) => {
                this.canvas.discardActiveObject();
                cloned.set({
                    left: cloned.left + 10,
                    top: cloned.top + 10,
                });
                this.canvas.add(cloned);
                this.canvas.setActiveObject(cloned);
                this.canvas.requestRenderAll();
                this.saveState();
            });
        }

        deleteObject() {
            const activeObjects = this.canvas.getActiveObjects();
            if (!activeObjects.length) return;
            activeObjects.forEach(obj => this.canvas.remove(obj));
            this.canvas.discardActiveObject();
            this.canvas.requestRenderAll();
            this.saveState();
        }

        initEventListeners() {
            this.$('#zoom-in-btn').addEventListener('click', () => this.setZoom(1.2));
            this.$('#zoom-out-btn').addEventListener('click', () => this.setZoom(0.8));
            this.$('#fit-to-screen-btn').addEventListener('click', () => this.fitToScreen());

            this.$('#canvas-width').addEventListener('change', (e) => this.setCanvasSize(e.target.value, null));
            this.$('#canvas-height').addEventListener('change', (e) => this.setCanvasSize(null, e.target.value));

            this.$('#bg-uploader').addEventListener('change', (e) => this.handleBackgroundUpload(e));
            this.$('#add-text').addEventListener('click', () => this.addText());
            this.$('#add-rect').addEventListener('click', () => this.addRect());
            this.$('#image-uploader').addEventListener('change', (e) => this.handleImageUpload(e));
            this.$('#add-qrcode').addEventListener('click', () => this.openQrCodeModal());
            this.$('#data-uploader').addEventListener('change', (e) => this.handleDataUpload(e));
            this.$('#font-uploader').addEventListener('change', (e) => this.handleFontUpload(e));

            this.$('#undo-btn').addEventListener('click', () => this.undo());
            this.$('#redo-btn').addEventListener('click', () => this.redo());

            // This listener is global, but its logic can be inside the component
            document.addEventListener('keydown', (e) => {
                // Prevent interfering with inputs outside the component
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                    if (this.root.contains(e.target)) { // Only act if the input is inside our component
                         // standard undo/redo for inputs will work. We only want to catch canvas undo/redo.
                    } else {
                        return; // It's an input outside our component, ignore.
                    }
                }
                
                if (e.ctrlKey || e.metaKey) {
                    if (e.key.toLowerCase() === 'z') {
                        this.undo();
                    }
                    if (e.key.toLowerCase() === 'y') {
                        this.redo();
                    }
                }

                const isInputFocused = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
                if (e.key === 'Delete') {
                    this.handleMenuAction('delete');
                }

                if (!isInputFocused) { // Hanya jalankan jika tidak sedang mengetik di input
                    if (e.ctrlKey || e.metaKey) {
                        switch (e.key.toLowerCase()) {
                            case 'c': this.handleMenuAction('copy'); break;
                            case 'v': this.handleMenuAction('paste'); break;
                            case 'd': e.preventDefault(); this.handleMenuAction('duplicate'); break;
                            case '[': e.preventDefault(); e.altKey ? this.handleMenuAction('send-to-back') : this.handleMenuAction('send-backward'); break;
                            case ']': e.preventDefault(); e.altKey ? this.handleMenuAction('bring-to-front') : this.handleMenuAction('bring-forward'); break;
                        }
                    }
                }
            });

            this.setupToolbarListeners();

            this.$('#close-qrcode-modal').addEventListener('click', () => this.$('#qrcode-modal').classList.add('hidden'));
            this.$('#add-qrcode-column').addEventListener('click', () => this.addQrCodeColumnSelector());
            this.$('#save-qrcode-btn').addEventListener('click', () => this.saveAndAddQrCode());

            const logoUploader = this.$('#logoUploader');
            const logoPreview = this.$('#logo-preview');
            const removeLogoBtn = this.$('#remove-logo');

            this.$$('input[name="dots-color-type"]').forEach(radio => {
                radio.addEventListener('change', () => {
                    const isGradient = this.$('input[name="dots-color-type"]:checked').value === 'gradient';
                    this.$('.dots-gradient-fields').classList.toggle('hidden', !isGradient);
                    this.$('.dots-single-color-fields').classList.toggle('hidden', isGradient);
                });
            });

            logoUploader.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadedLogoDataUrl = e.target.result;
                    logoPreview.src = this.uploadedLogoDataUrl;
                    logoPreview.classList.remove('hidden');
                    removeLogoBtn.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            });

            removeLogoBtn.addEventListener('click', () => {
                this.uploadedLogoDataUrl = null;
                logoUploader.value = '';
                logoPreview.src = '';
                logoPreview.classList.add('hidden');
                removeLogoBtn.classList.add('hidden');
            });

            this.$$('.download-format').forEach(button => {
                button.addEventListener('click', (e) => {
                    let format = e.currentTarget.getAttribute('data-format');
                    this.generateAndDownloadZip(format);
                });
            });

            this.root.addEventListener('click', (event) => {
                const canvasWrapper = this.canvas.wrapperEl;
                if (canvasWrapper && !canvasWrapper.contains(event.target) && !event.target.closest('#contextual-toolbar') && !event.target.closest('#sidebar') && !event.target.closest('header')) {
                    if (this.canvas.getActiveObject()) {
                        this.canvas.discardActiveObject();
                        this.canvas.requestRenderAll();
                    }
                }
            });
            
            // Component UI Listeners
            const appContainer = this.$('#app-container');
            const themeToggleBtn = this.$('#theme-toggle');
            const darkIcon = this.$('#theme-toggle-dark-icon');
            const lightIcon = this.$('#theme-toggle-light-icon');

            const toggleTheme = () => {
                appContainer.classList.toggle('dark');
                let isDark = appContainer.classList.contains('dark');
                localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
                lightIcon.classList.toggle('hidden', isDark);
                darkIcon.classList.toggle('hidden', !isDark);
            };
            themeToggleBtn.addEventListener('click', toggleTheme);

            // Set initial theme
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                appContainer.classList.add('dark');
                lightIcon.classList.add('hidden');
                darkIcon.classList.remove('hidden');
            } else {
                appContainer.classList.remove('dark');
                lightIcon.classList.remove('hidden');
                darkIcon.classList.add('hidden');
            }
            
            this.$('#sidebar-toggle').addEventListener('click', () => {
                this.$('#sidebar').classList.toggle('hidden');
            });
            
            const downloadButton = this.$('#download-zip-btn');
            const formatMenu = this.$('#download-format');

            downloadButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the global click listener from closing it immediately
                const isExpanded = downloadButton.getAttribute('aria-expanded') === 'true';
                downloadButton.setAttribute('aria-expanded', !isExpanded);
                formatMenu.classList.toggle('hidden');
            });
            
            // *** FIX: Correctly handle clicks outside the download menu to close it.
            // Using composedPath() correctly traverses the Shadow DOM boundary.
            document.addEventListener('click', (event) => {
                if (!event.composedPath().includes(downloadButton)) {
                     formatMenu.classList.add('hidden');
                     downloadButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
        
        // ... (All other methods from CertificateEditor class go here, unchanged, as they already use 'this.$')
        // I will copy them below for completeness.
        
        setCanvasSize(width, height) {
            const newWidth = parseInt(width) || this.canvas.getWidth();
            const newHeight = parseInt(height) || this.canvas.getHeight();

            this.canvas.setZoom(1);
            this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);

            this.canvas.setWidth(newWidth);
            this.canvas.setHeight(newHeight);

            this.fitToScreen();
            this.canvas.renderAll();
        }

        updateContextualToolbar(obj) {
            if (!obj) {
                this.hideContextualToolbar();
                return;
            }

            const toolbar = this.$('#contextual-toolbar');
            toolbar.classList.remove('hidden');
            toolbar.classList.add('flex');

            // Tampilkan/sembunyikan opsi teks vs general
            const isText = obj.type === 'i-text' || obj.type === 'textbox';
            this.$('#text-options').classList.toggle('hidden', !isText);
            this.$('#text-options').classList.toggle('flex', isText);
            this.$('#general-options').classList.remove('hidden');
            this.$('#general-options').classList.add('flex');

            if (isText) {
                this.$('#font-family-select').value = obj.fontFamily;
                this.$('#font-size-input').value = obj.fontSize;
                this.$('#font-color-picker').value = obj.fill;
                this.$('#fill-color-picker').classList.add('hidden');
            } else {
                this.$('#fill-color-picker').classList.remove('hidden');
                this.$('#fill-color-picker').value = obj.fill;
            }

            // Aktifkan/nonaktifkan tombol Paste di toolbar
            const pasteButton = this.$('#general-options button[data-action="paste"]');
            if (pasteButton) {
                pasteButton.disabled = !this._clipboard;
            }
            
            this.updateDataMappingUI(obj);
        }

        hideContextualToolbar() {
            this.$('#contextual-toolbar').classList.add('hidden');
            this.updateDataMappingUI(null);
        }

        setupToolbarListeners() {
            const applyToActive = (callback) => {
                const activeObject = this.canvas.getActiveObject();
                if (activeObject) {
                    callback(activeObject);
                    this.canvas.renderAll();
                    this.saveState();
                }
            };

            // --- Listener untuk semua tombol aksi (termasuk yang di dalam submenu) ---
            this.$('#contextual-toolbar').addEventListener('click', (e) => {
                const button = e.target.closest('button[data-action]');
                if (button) {
                    e.stopPropagation(); // Mencegah event lain terpicu
                    this.handleMenuAction(button.dataset.action);
                    // Sembunyikan semua submenu setelah aksi
                    this.$$('[data-submenu-container] > div').forEach(sub => sub.classList.add('hidden'));
                }
            });
            
            // --- Listener khusus untuk Text Options ---
            this.$('#font-family-select').addEventListener('change', (e) => applyToActive(obj => obj.set("fontFamily", e.target.value)));
            this.$('#font-size-input').addEventListener('input', (e) => applyToActive(obj => obj.set("fontSize", parseInt(e.target.value, 10))));
            this.$('#font-color-picker').addEventListener('input', (e) => applyToActive(obj => obj.set("fill", e.target.value)));
            this.$('#font-bold-btn').addEventListener('click', () => applyToActive(obj => obj.set("fontWeight", obj.fontWeight === 'bold' ? 'normal' : 'bold')));
            this.$('#font-italic-btn').addEventListener('click', () => applyToActive(obj => obj.set("fontStyle", obj.fontStyle === 'italic' ? 'normal' : 'italic')));
            this.$('#fill-color-picker').addEventListener('input', (e) => applyToActive(obj => obj.set("fill", e.target.value)));

            // --- Logika untuk menampilkan dan menyembunyikan submenu ---
            this.$$('[data-submenu-container]').forEach(container => {
                const submenu = container.querySelector('div');
                container.addEventListener('mouseenter', () => {
                    submenu.classList.remove('hidden');
                    submenu.classList.add('flex');
                });
                container.addEventListener('mouseleave', () => {
                    submenu.classList.add('hidden');
                    submenu.classList.remove('flex');
                });
            });
        }

        handleBackgroundUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (f) => {
                fabric.Image.fromURL(f.target.result, (img) => {
                    const canvasWidth = this.canvas.width;
                    const canvasHeight = this.canvas.height;
                    const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);

                    this.canvas.setBackgroundImage(img, () => {
                        this.canvas.renderAll();
                        this.fitToScreen();
                    }, {
                        scaleX: scale,
                        scaleY: scale,
                        originX: 'center',
                        originY: 'center',
                        left: canvasWidth / 2,
                        top: canvasHeight / 2
                    });
                });
            };
            reader.readAsDataURL(file);
        }

        handleImageUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (f) => {
                fabric.Image.fromURL(f.target.result, (img) => {
                    img.scaleToHeight(this.$('#canvas-height').value * 0.5);
                    this.canvas.add(img).centerObject(img).renderAll();
                });
            };
            reader.readAsDataURL(file);
        }

        handleDataUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            this.showLoading('Membaca file data...');
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = event.target.result;
                    if (file.name.endsWith('.csv')) {
                        const parsed = Papa.parse(data, {
                            header: true,
                            skipEmptyLines: true
                        });
                        this.uploadedData = parsed.data;
                        this.dataHeaders = parsed.meta.fields;
                    } else {
                        const workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        const sheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[sheetName];
                        this.uploadedData = XLSX.utils.sheet_to_json(worksheet);
                        if (this.uploadedData.length > 0) {
                            this.dataHeaders = Object.keys(this.uploadedData[0]);
                        }
                    }
                    this.$('#data-mapping-container').classList.remove('hidden');
                    this.updateDataMappingUI();
                    this.showAlert(`${this.uploadedData.length} baris data berhasil di-load.`);
                } catch (err) {
                    this.showAlert('Gagal memproses file. Pastikan formatnya benar.', 'error');
                    console.error(err);
                } finally {
                    this.hideLoading();
                }
            };
            reader.readAsBinaryString(file);
        }

        handleFontUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            const fontName = file.name.split('.')[0].replace(/[^a-zA-Z0-9]/g, '');

            reader.onload = (f) => {
                const fontData = f.target.result;
                const newFont = new FontFace(fontName, `url(${fontData})`);
                newFont.load().then((loadedFont) => {
                    document.fonts.add(loadedFont);
                    this.fontCache[fontName] = fontName;
                    this.updateFontDropdown();
                    this.showAlert(`Font '${fontName}' berhasil ditambahkan.`);
                }).catch(err => {
                    console.error("Font loading failed:", err);
                    this.showAlert("Gagal memuat font.", "error");
                });
            };
            reader.readAsDataURL(file);
        }

        updateFontDropdown() {
            const select = this.$('#font-family-select');
            const defaultFonts = {
                'Poppins': 'Poppins, sans-serif',
                'Arial': 'Arial, sans-serif',
                'Verdana': 'Verdana, sans-serif',
                'Georgia': 'Georgia, serif',
                'Times New Roman': 'Times New Roman, serif',
                'Courier New': 'Courier New, monospace'
            };
            const allFonts = { ...defaultFonts, ...this.fontCache };
            select.innerHTML = Object.keys(allFonts)
                .map(name => `<option value="${allFonts[name]}">${name}</option>`)
                .join('');
        }
        
        addText() {
            const text = new fabric.Textbox('Teks Contoh', {
                left: this.$('#canvas-width').value * 0.4,
                top: this.$('#canvas-height').value * 0.4,
                width: this.$('#canvas-width').value * 0.2,
                fontSize: 40,
                fontFamily: 'Poppins',
                fill: '#000000',
            });
            this.canvas.add(text).setActiveObject(text).renderAll();
        }

        addRect() {
            const rect = new fabric.Rect({
                left: this.$('#canvas-width').value * 0.4,
                top: this.$('#canvas-height').value * 0.4,
                width: this.$('#canvas-width').value * 0.3,
                height: this.$('#canvas-height').value * 0.25,
                fill: '#93c5fd',
            });
            this.canvas.add(rect).setActiveObject(rect).renderAll();
        }

        updateDataMappingUI(selectedObject = this.canvas.getActiveObject()) {
            const container = this.$('#data-mapping-ui');
            if (this.dataHeaders.length === 0) {
                container.innerHTML = '<p class="text-xs text-slate-500">Upload file Excel/CSV untuk memulai.</p>';
                return;
            }

            if (!selectedObject) {
                container.innerHTML = '<p class="text-xs text-slate-500">Pilih elemen di kanvas untuk dihubungkan dengan kolom data.</p>';
                return;
            }

            const currentLink = selectedObject.dataLink || 'none';
            const options = ['<option value="none">-- Tidak terhubung --</option>', ...this.dataHeaders.map(header =>
                `<option value="${header}" ${header === currentLink ? 'selected' : ''}>${header}</option>`)
            ].join('');

            container.innerHTML = `
                <div class="bg-slate-100 p-2 rounded-md dark:bg-slate-700/50">
                    <p class="text-xs font-bold mb-1">Elemen terpilih: <span class="font-normal dark:text-slate-400">${selectedObject.type}</span></p>
                    <select id="data-linker" class="w-full h-8 rounded-md borders bg-white dark:bg-slate-700 px-2 text-sm">${options}</select>
                </div>
            `;

            this.$('#data-linker').addEventListener('change', (e) => {
                const value = e.target.value;
                if (value === 'none') {
                    delete selectedObject.dataLink;
                } else {
                    selectedObject.set('dataLink', value);
                    if (this.uploadedData.length > 0 && (selectedObject.type === 'i-text' || selectedObject.type === 'textbox')) {
                        const cellValue = this.uploadedData[0][value];
                        selectedObject.set('text', String(cellValue));
                        this.canvas.renderAll();
                    }
                }
            });
        }

        openQrCodeModal() {
            if (this.dataHeaders.length === 0) {
                this.showAlert('Harap upload data Excel/CSV terlebih dahulu untuk membuat QR Code dinamis.', 'warning');
                return;
            }
            this.$('#qrcode-columns-container').innerHTML = '';
            this.addQrCodeColumnSelector();
            this.$('#qrcode-modal').classList.remove('hidden');
        }

        addQrCodeColumnSelector() {
            const container = this.$('#qrcode-columns-container');
            const count = container.children.length;
            const options = this.dataHeaders.map(h => `<option value="${h}">${h}</option>`).join('');

            const div = document.createElement('div');
            div.className = 'flex items-center gap-2';
            div.innerHTML = `
                <select class="w-full h-9 rounded-md borders bg-slate-50 dark:bg-slate-700 px-2 text-sm dark:text-slate-400" data-qr-column-index="${count}">
                    <option value="">-- Pilih Kolom ${count + 1} --</option>
                    ${options}
                </select>
            `;
            container.appendChild(div);
        }

        async saveAndAddQrCode() {
            const columnSelectors = this.$$('[data-qr-column-index]');
            const columns = Array.from(columnSelectors).map(sel => sel.value).filter(Boolean);
            if (columns.length === 0) {
                return this.showAlert('Pilih setidaknya satu kolom untuk data QR Code.', 'warning');
            }

            this.qrCodeConfig.columns = columns;
            this.qrCodeConfig.validationUrl = this.$('#validation-url').value;

            const stylingOptions = {
                backgroundOptions: { color: this.$('#qr-bg-color').value },
                dotsOptions: { type: this.$('#qr-dots-type').value },
                cornersSquareOptions: { type: this.$('#qr-corners-square-type').value, color: this.$('#qr-corners-square-color').value },
                cornersDotOptions: { type: this.$('#qr-corners-dot-type').value, color: this.$('#qr-corners-dot-color').value },
                qrOptions: { errorCorrectionLevel: this.$('#qr-error-correction-level').value },
                imageOptions: { margin: parseInt(this.$('#qr-image-margin').value) || 0 },
                image: this.uploadedLogoDataUrl || null
            };

            if (this.$('input[name="dots-color-type"]:checked').value === 'gradient') {
                stylingOptions.dotsOptions.gradient = {
                    type: 'linear',
                    rotation: this.$('#qr-dots-gradient-rotation').value * (Math.PI / 180),
                    colorStops: [
                        { offset: 0, color: this.$('#qr-dots-gradient-color1').value },
                        { offset: 1, color: this.$('#qr-dots-gradient-color2').value }
                    ]
                };
            } else {
                stylingOptions.dotsOptions.color = this.$('#qr-dots-color').value;
            }

            this.qrCodeConfig.styling = stylingOptions;

            this.showLoading('Membuat QR Code...');
            try {
                const qrData = `${this.qrCodeConfig.validationUrl}[ENCRYPTED_CODE_PLACEHOLDER]`;
                const qrCode = new QRCodeStyling({ ...stylingOptions, data: qrData });
                const blob = await qrCode.getRawData("png");
                const qrImageUrl = URL.createObjectURL(blob);

                if (qrImageUrl) {
                    fabric.Image.fromURL(qrImageUrl, (img) => {
                        img.scaleToWidth(parseInt(this.$('#canvas-width').value * 0.2));
                        img.set('isQrCode', true);
                        this.canvas.add(img).centerObject(img).renderAll();
                    });
                }
                this.$('#qrcode-modal').classList.add('hidden');
            } catch (error) {
                this.showAlert('Gagal membuat QR code placeholder.', 'error');
                console.error(error);
            } finally {
                this.hideLoading();
            }
        }
        
        async generateAndDownloadZip(paramFormat) {
            const format = paramFormat;
            if (!format) {
                console.error("Format unduhan tidak ditentukan.");
                return;
            }
            const isPdf = format === 'pdf';
            const dataToProcess = this.uploadedData.length > 0 ? this.uploadedData : [{}];
            
            if (dataToProcess.length === 1 && this.uploadedData.length === 0) {
                this.showLoading('Membuat sertifikat...');
                
                const originalViewport = this.canvas.viewportTransform.slice();
                const originalZoom = this.canvas.getZoom();
                this.canvas.setZoom(1);
                this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
                
                const dataUrl = this.canvas.toDataURL({ format: isPdf ? 'jpeg' : format, quality: 1.0 });

                if (isPdf) {
                    const { jsPDF } = window.jspdf;
                    const orientation = this.canvas.width > this.canvas.height ? 'l' : 'p';
                    const pdfDoc = new jsPDF({
                        orientation: orientation, unit: 'px', format: [this.canvas.width, this.canvas.height]
                    });
                    pdfDoc.addImage(dataUrl, 'JPEG', 0, 0, this.canvas.width, this.canvas.height);
                    pdfDoc.save('sertifikat.pdf');
                } else {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = `sertifikat.${format}`;
                    link.click();
                }
                
                this.canvas.setZoom(originalZoom);
                this.canvas.setViewportTransform(originalViewport);
                this.canvas.renderAll();

                this.hideLoading();
                this.showAlert('Sertifikat berhasil dibuat!', 'success');
                return; 
            }

            this.showLoading('Memulai proses...');
            const zip = new JSZip();

            const originalViewport = this.canvas.viewportTransform.slice();
            const originalZoom = this.canvas.getZoom();
            this.canvas.setZoom(1);
            this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);

            const originalCanvasState = this.canvas.toJSON(['dataLink', 'isQrCode']);

            let encryptedCodes = [];
            if (this.canvas.getObjects().some(o => o.isQrCode) && this.uploadedData.length > 0) {
                this.showLoading(`Mengenkripsi ${this.uploadedData.length} data...`);
                const combinedTexts = this.uploadedData.map(row => this.qrCodeConfig.columns.map(col => row[col] || '').join(' - '));
                try {
                    const response = await axios.post('https://aes-qrcode-node.vercel.app/', { action: 'encrypt', data: combinedTexts });
                    encryptedCodes = response.data.result;
                } catch (error) {
                    this.canvas.setZoom(originalZoom); this.canvas.setViewportTransform(originalViewport);
                    this.hideLoading(); console.error(error);
                    return this.showAlert('Gagal saat enkripsi data. Proses dibatalkan.', 'error');
                }
            }

            const filenameColumn = this.dataHeaders[0];

            for (let i = 0; i < dataToProcess.length; i++) {
                const row = dataToProcess[i];
                this.showLoading(`Membuat sertifikat ${i + 1}/${dataToProcess.length}...`);

                await new Promise(resolve => {
                    this.canvas.loadFromJSON(originalCanvasState, () => {
                        if (this.uploadedData.length > 0) {
                            this.canvas.getObjects().forEach(obj => {
                                if (obj.dataLink && (obj.type === 'i-text' || obj.type === 'textbox')) {
                                    const cellValue = row[obj.dataLink] || '';
                                    obj.set('text', String(cellValue));
                                }
                            });
                        }
                        this.canvas.renderAll();
                        resolve();
                    });
                });

                const currentQrObject = this.canvas.getObjects().find(obj => obj.isQrCode);
                if (currentQrObject && encryptedCodes[i]) {
                    const qrFinalData = `${this.qrCodeConfig.validationUrl}${encryptedCodes[i]}`;
                    const qrCode = new QRCodeStyling({ ...this.qrCodeConfig.styling, data: qrFinalData });
                    const blob = await qrCode.getRawData("png");
                    const qrImageUrl = URL.createObjectURL(blob);

                    await new Promise(resolve => {
                        fabric.Image.fromURL(qrImageUrl, (newImg) => {
                            newImg.set({
                                left: currentQrObject.left, top: currentQrObject.top,
                                scaleX: currentQrObject.scaleX, scaleY: currentQrObject.scaleY,
                                angle: currentQrObject.angle, isQrCode: true
                            });
                            this.canvas.remove(currentQrObject); this.canvas.add(newImg);
                            this.canvas.renderAll(); resolve();
                        });
                    });
                }
                
                const dataUrlLoop = this.canvas.toDataURL({ format: isPdf ? 'jpeg' : format, quality: 1.0 });
                const filename = (this.uploadedData.length > 0 && filenameColumn) ? `${row[filenameColumn] || `sertifikat-${i+1}`}` : `sertifikat-${i+1}`;

                if (isPdf) {
                    const { jsPDF } = window.jspdf;
                    const orientation = this.canvas.width > this.canvas.height ? 'l' : 'p';
                    const pdfDoc = new jsPDF({ orientation: orientation, unit: 'px', format: [this.canvas.width, this.canvas.height] });
                    pdfDoc.addImage(dataUrlLoop, 'JPEG', 0, 0, this.canvas.width, this.canvas.height);
                    const pdfBlob = pdfDoc.output('blob');
                    zip.file(`${filename}-${i+1}.pdf`, pdfBlob);
                } else {
                    zip.file(`${filename}-${i+1}.${format}`, dataUrlLoop.split(',')[1], { base64: true });
                }
            }

            this.showLoading('Mengompres file ZIP...');

            this.canvas.loadFromJSON(originalCanvasState, () => {
                this.canvas.setZoom(originalZoom);
                this.canvas.setViewportTransform(originalViewport);
                this.canvas.renderAll();

                zip.generateAsync({ type: 'blob' }).then((content) => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(content);
                    link.download = `Sertifikat-${format.toUpperCase()}.zip`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    this.hideLoading();
                    this.showAlert('File ZIP berhasil dibuat!', 'success');
                });
            });
        }
    }

    /* Define the custom element if it doesn't already exist */
    if (!window.customElements.get('validsertifikat-app')) {
        window.customElements.define('validsertifikat-app', ValidSertifikat);
    }
    
}));