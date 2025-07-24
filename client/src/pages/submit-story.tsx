import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle, CloudUpload, Lightbulb, Send } from "lucide-react";
import { insertStorySubmissionSchema } from "@shared/schema";

const storyFormSchema = insertStorySubmissionSchema.extend({
  permission: z.boolean().refine(val => val === true, {
    message: "You must give permission to use your story",
  }),
});

type StoryFormData = z.infer<typeof storyFormSchema>;

export default function SubmitStory() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<StoryFormData>({
    resolver: zodResolver(storyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      connection: "",
      timePeriod: "",
      phone: "",
      storyTitle: "",
      storyContent: "",
      photoUrls: [],
      permission: false,
    },
  });

  const submitStoryMutation = useMutation({
    mutationFn: async (data: Omit<StoryFormData, "permission">) => {
      return apiRequest("POST", "/api/stories", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/stories"] });
      setIsSubmitted(true);
      toast({
        title: "Story Submitted!",
        description: "Thank you for sharing your PWS story. We'll review it soon.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your story. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: StoryFormData) => {
    const { permission, ...submissionData } = data;
    submitStoryMutation.mutate(submissionData);
  };

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-8 bg-green-50 border-green-200">
            <CardContent>
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 text-lg mb-4">
                Your story has been submitted successfully. We'll review it and add it to our archive soon.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-4"
              >
                Submit Another Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Share Your PWS Story</h2>
          <p className="text-xl text-pws-gray">Help us preserve the memories and experiences that make Portland Welding Supply special</p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Connection to PWS */}
                <FormField
                  control={form.control}
                  name="connection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Connection to PWS</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your connection..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="employee">Former/Current Employee</SelectItem>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="family">Family Member</SelectItem>
                          <SelectItem value="community">Community Member</SelectItem>
                          <SelectItem value="supplier">Supplier/Partner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time Period and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="timePeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Period</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 1970s-1980s" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Story Title */}
                <FormField
                  control={form.control}
                  name="storyTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Give your story a memorable title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Story Content */}
                <FormField
                  control={form.control}
                  name="storyContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Story *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={8}
                          placeholder="Share your memories, experiences, or stories about Portland Welding Supply. What made it special? Who did you work with? What moments stand out?"
                          className="resize-vertical"
                          {...field} 
                        />
                      </FormControl>
                      <div className="flex items-center text-sm text-pws-gray mt-2">
                        <Lightbulb className="w-4 h-4 mr-1" />
                        <span>Include specific names, dates, locations, or events that would help us understand the context of your story.</span>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Photo Upload Placeholder */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photos (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pws-blue transition-colors">
                    <CloudUpload className="w-12 h-12 text-pws-gray mx-auto mb-3" />
                    <div>
                      <Button type="button" variant="ghost" className="text-pws-blue hover:text-pws-dark-blue font-medium">
                        Click to upload photos
                      </Button>
                      <p className="text-sm text-pws-gray">or drag and drop</p>
                    </div>
                    <p className="text-xs text-pws-gray mt-2">Support for JPG, PNG, GIF up to 5MB each</p>
                  </div>
                </div>

                {/* Permission */}
                <FormField
                  control={form.control}
                  name="permission"
                  render={({ field }) => (
                    <FormItem className="bg-pws-light-gray p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div>
                          <FormLabel className="text-sm text-gray-700 leading-relaxed">
                            I give permission to Portland Welding Supply to use this story and any uploaded photos in their historical archive, website, and promotional materials. I confirm that I have the right to share any photos included with this submission. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={submitStoryMutation.isPending}
                    className="bg-pws-blue text-white px-12 py-4 hover:bg-pws-dark-blue transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    {submitStoryMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Your Story
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-pws-gray mt-3">
                    Your story will be reviewed before being added to our archive. Thank you for contributing to PWS history!
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
