"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectContent
} from "@/components/ui/select";

import { delay, motion } from 'framer-motion';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+94) 765496113"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "virajsachi33@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "A/11 Nawagamuwa Kegalle"
    },
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent ">Let's work together</h3>
                            <p className="text-white/60">Thank you for visiting my portfolio! I’d love to hear from you. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out. Here’s how you can get in touch with me:</p>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="firstname" placeholder="First name" />
                                <Input type="firstname" placeholder="Last name" />
                                <Input type="firstname" placeholder="Email address" />
                                <Input type="firstname" placeholder="Phone number" />

                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="web-development">
                                            Web App Development
                                        </SelectItem>
                                        <SelectItem value="mobile-app-development">
                                            Mobile App Development
                                        </SelectItem>
                                        <SelectItem value="design">
                                            Desktop App Development
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message hear." />

                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {
                                info.map((item, index) => {
                                    return <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60"> {item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact