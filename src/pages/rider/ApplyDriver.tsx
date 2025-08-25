import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useDriverApplyMutation } from "@/redux/features/driver/driver.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import z from "zod";

export const ApplyDriver = () => {
  const { data: userData } = useUserInfoQuery(undefined);
  const [driverApply] = useDriverApplyMutation();
  const driverSchema = z.object({
    userId: z.string({ error: "userId must be a string" }),
    NIDNumber: z
      .string()
      .min(1, "NID number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "NID number be a positive number",
      }),
    licenseNumber: z
      .string()
      .min(1, "License number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "License number be a positive number",
      }),

    vehicleType: z.string({ error: "Vehicle type must be a string" }),
    vehicleModel: z.string({ error: "Vehicle model must be a string" }),
    vehicleNumberPlate: z.string({
      error: "Vehicle number plate must be a string",
    }),
  });
  const form = useForm<z.infer<typeof driverSchema>>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      userId: "",
      NIDNumber: "",
      licenseNumber: "",
      vehicleType: "",
      vehicleModel: "",
      vehicleNumberPlate: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const driverData = {
      userId: userData?.data?.data?._id,
      NIDNumber: Number(data.NIDNumber),
      licenseNumber: Number(data.licenseNumber),
      vehicleInfo: {
        vehicleType: data.vehicleType,
        vehicleModel: data.vehicleModel,
        vehicleNumberPlate: data.vehicleNumberPlate,
      },
    };
    // console.log(driverData);
    await driverApply(driverData).unwrap();
    // console.log("Driver Response", res);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Apply For a Driver !</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="apply-driver"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="NIDNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      NID Number <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0123456789"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      License Number <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="556789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Vehicle Type <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BIKE">BIKE</SelectItem>
                        <SelectItem value="CAR">CAR</SelectItem>
                        <SelectItem value="CNG">CNG</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Vehicle Model <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleNumberPlate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Number Plate <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="LA5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="apply-driver" className="w-full">
            Apply
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
