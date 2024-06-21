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
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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
];

const Contact = () => {
    const [formdata, setFormdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        mobile: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const form = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleServiceChange = (value) => {
        setFormdata({ ...formdata, service: value });
        setErrors({ ...errors, service: "" });
    };



    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^(\+94|0)?(7(0|1|2|5|6|7|8))[0-9]{7}$/;

        if (!formdata.firstname) newErrors.firstname = "First name is required";
        if (!formdata.lastname) newErrors.lastname = "Last name is required";
        if (!formdata.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formdata.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formdata.mobile) {
            newErrors.mobile = "Phone number is required";
        } else if (!mobileRegex.test(formdata.mobile)) {
            newErrors.mobile = "Invalid phone number format";
        }
        if (!formdata.message) newErrors.message = "Message is required";
        if (!formdata.service) newErrors.service = "Service selection is required";
        return newErrors;
    };

    const handleSendEmail = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (isSending) {
            return;
        }
        setIsSending(true);
        try {
            await emailjs.sendForm('service_2gewkfu', 'template_hkoo9kl', form.current, '-qmLfDIMGEDTTEri0');

            // Email sent successfully
            Swal.fire({
                title: "Thank you!",
                text: "Email Sent Successfully",
                icon: "success",
            });
            console.log('SUCCESS!');
            e.target.reset(); // Reset form
            setFormdata({
                firstname: "",
                lastname: "",
                email: "",
                service: "",
                mobile: "",
                message: ""
            });
            setErrors({}); // Clear any form validation errors
        } catch (error) {
            // Error handling
            Swal.fire({
                title: "Error!",
                text: "Failed to send email. Please try again.",
                icon: "error"
            });
            console.error('FAILED...', error);
        } finally {
            setIsSending(false); // Reset sending status
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSendEmail}>
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Thank you for visiting my portfolio! I’d love to hear from you. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out. Here’s how you can get in touch with me:
                            </p>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>

                                    <Input

                                        type="text"
                                        placeholder="First name"
                                        name="firstname"
                                        value={formdata.firstname}
                                        onChange={handleInputChange}
                                        id="firstname"
                                        aria-label="First name"
                                        className={errors.firstname ? 'border-red-500 w-full' : 'w-full'}
                                    />
                                    {errors.firstname && <p className="text-xs text-red-500">{errors.firstname}</p>}
                                </div>
                                <div>

                                    <Input
                                        type="text"
                                        placeholder="Last name"
                                        name="lastname"
                                        value={formdata.lastname}
                                        onChange={handleInputChange}
                                        id="lastname"
                                        aria-label="Last name"

                                        className={errors.lastname ? 'border-red-500 w-full' : 'w-full'}
                                    />
                                    {errors.lastname && <p className="text-xs text-red-500">{errors.lastname}</p>}
                                </div>
                                <div>

                                    <Input
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        value={formdata.email}
                                        onChange={handleInputChange}
                                        id="email"
                                        aria-label="Email address"
                                        className={errors.email ? 'border-red-500 w-full' : 'w-full'}
                                    />
                                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                </div>
                                <div>

                                    <Input
                                        type="tel"
                                        placeholder="Phone number"
                                        name="mobile"
                                        value={formdata.mobile}
                                        onChange={handleInputChange}
                                        id="mobile"
                                        aria-label="Phone number"
                                        className={errors.mobile ? 'border-red-500 w-full' : 'w-full'}
                                    />
                                    {errors.mobile && <p className="text-xs text-red-500">{errors.mobile}</p>}
                                </div>
                            </div>
                            <div>
                                <Select onValueChange={handleServiceChange} name="service" aria-label="Select a service">
                                    <SelectTrigger className={`w-full ${errors.service ? 'border-red-500' : ''}`}>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a Service</SelectLabel>
                                            <SelectItem value="web-development">Web App Development</SelectItem>
                                            <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                                            <SelectItem value="desktop-app-development">Desktop App Development</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}

                            </div>

                            <div>
                                <Textarea
                                    className={`h-[200px] ${errors.message ? 'border-red-500' : ''}`}
                                    placeholder="Type your message here."
                                    name="message"
                                    value={formdata.message}
                                    onChange={handleInputChange}
                                    id="message"
                                    aria-label="Message"
                                />
                                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}

                            </div>

                            <Button type="submit" size="md" className="max-w-40" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Email'}</Button>
                        </form>
                    </div>
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
