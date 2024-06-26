import React from "react";
import { Button } from "@/components/ui/button";
import { StrainerForm } from "@/components/component/strainer-form";

export default function TestPage() {
    // hooks + helper functions

    return <>
        <div className="flex flex-col items-center justify-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati, soluta doloribus sit ullam quos eligendi quasi nesciunt labore reiciendis aliquid cupiditate placeat perspiciatis, deserunt tempora sed cum est ipsa?</p>
            <Button>shadcn btn</Button>
        </div>
        <div className="max-w-[800px] mx-auto">
            <StrainerForm />
        </div>
    </>
}