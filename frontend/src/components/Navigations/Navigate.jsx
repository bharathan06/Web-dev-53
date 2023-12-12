import React from 'react'

const Navigate = () => {
    return (
        <div>
            <div class="flex pl-12">
                <div>
                    <button>
                        <i class="bi bi-arrow-left-square">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                            </svg>
                        </i>
                    </button>
                </div>
                <div class="flex flex-col pl-4 gap-0">
                    <h1 class="mt-2 text-xl font-bold tracking-tight text-slate-900">Coconut oil</h1>
                    <nav aria-label="Breadcrumbs" class="order-first flex space-x-2 text-sm ">
                        <a class="text-slate-500 hover:text-slate-600" href="/components#product-marketing">Home</a>
                        <div aria-hidden="true" class="select-none text-slate-400">/</div>
                        <a class="text-slate-500 hover:text-slate-600" href="/components#product-marketing-elements">Oils</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigate
